import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from '@/libs/prisma'

export const dynamic = 'auto'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
   apiVersion:'2023-10-16',
});

const claculateOrderAmount = (items) => {
    const totalPrice = items.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        return acc * itemTotal;
    }, 1);

    const price= Math.floor(totalPrice);
    return price;
};

export async function POST(request) {
    const currentUser = await getCurrentUser();
   

    if (!currentUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const body = await request.json()
    const {items, payment_intent_id} = body
    const total = claculateOrderAmount(items) * 100
    const orderData = {
        user: { connect: { id:currentUser.id} },
        amount: total,
        currency: "usd",
        status: "pending",
        deliveryStatus: "pending",
        paymentIntentId: payment_intent_id,
        products: items,
    };

    if (payment_intent_id) {
        const current_intent = await stripe.paymentIntents.retrieve(
            payment_intent_id
        )
        if (current_intent) {
            const updated_intent = await stripe.paymentIntents.update(
                payment_intent_id,
                { amount: total }
            );
        
            const [existing_order, update_order] = await Promise.all([
                prisma.order.findFirst({
                    where: { paymentIntentId: payment_intent_id }
                }),



                prisma.order.update({
                    where: { paymentIntentId: payment_intent_id },
                    data: {
                        amount: total,
                        products: items,
                    },
                }),

            ])
            if (!existing_order) {
                return NextResponse.json(
                    { error: "invalid payment intent" },
                    { status: 400 }
                )
            }

            return NextResponse.json({ paymentIntent: updated_intent });
        }

    } else {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
            
            
        });

        orderData.paymentIntentId = paymentIntent.id  
          await prisma.order.create({
            data:orderData,
        });

        return NextResponse.json({ paymentIntent });
    }
  
}