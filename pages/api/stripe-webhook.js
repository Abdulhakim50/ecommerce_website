
import { NextRequest, NextResponse } from "next/server"
import { buffer } from "micro"
import Stripe from "stripe"
import prisma from "@/libs/prisma"










export const config = {
    api: {
        bodyParser: false
    }
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
})
export default async function handler(req, res) {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    if (!sig) {
        return res.status(400).send("missing the stripe signature")
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            buf,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        return res.status(400).send("webhook error" + error)
    }

    switch (event.type) {

        case 'charge.succeeded':
            const charge = event.data.object
            if (typeof charge.payment_intent === 'string') {
                await prisma?.order.update({
                    where: { paymentIntentId: charge.payment_intent },
                    data: {
                        status: "complete",
                        address: charge.shipping?.city,
                        address: charge.shipping?.country,
                        address: charge.shipping?.line1,
                        address: charge.shipping?.line2,
                        address: charge.shipping?.postal_code,
                        address: charge.shipping?.state,
                    },
                });
            }
            break;
        default:
            console.log("unhandled event type:" + event.type);
    }
    res.json({ received: true })

}
