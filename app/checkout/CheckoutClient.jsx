
'use client'
import React from 'react'
import toast from 'react-hot-toast';
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { useState, useEffect, useCallback } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
export const dynamic = "force-dynamic";







const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const  CheckoutClient =  () => {
    const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [clientSecret, setClientSecret] =useState("");
    const [paymentSuccess, setpaymentSuccess] =useState(false)

    const router = useRouter();
  
    console.log(paymentIntent)
    console.log(clientSecret)

    const handefetch=()=>{
        
    }

    useEffect(() => {
        
        if (cartProducts) {
            setLoading(true);
            setError(false);

            fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items: cartProducts,
                    payment_intent_id: paymentIntent,
                }),
            })
                .then((res) => {
                    setLoading(false);
                    if (res.status === 401) {
                        return router.push('/login')
                    }
                  
                    return res.json();
                   
                    

                }).then((data) => {
                    setClientSecret(data.paymentIntent.client_secret);
                    handleSetPaymentIntent(data.paymentIntent.id);
                
                   
                  })
                .catch((error) => {
                    setError(true);
                    console.log("Error", error);
                    toast.error("something want wrong");
                  
                });

               
              
        }
    }, [cartProducts, paymentIntent]);

    

    const options = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            labels: 'floating'
        }
    }
   

    const handleSetPaymentSuccess = useCallback((value) => {
        setpaymentSuccess(value)
    }, [])

   

    return (
        <div className=''>

            { cartProducts && clientSecret &&(
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} handleSetPaymentSuccess={handleSetPaymentSuccess} />
                </Elements>
            )}
            {loading && <div>Loading Checkout</div>}
            {error && (
                <div>someting want wrong</div>
            )}



            {paymentSuccess && (

                <div>
                    <div>payment success</div>
                    <div>
                        <button
                            onClick={() => router.push("/orders")}
                        >view Your Orders</button>
                    </div>
                </div>
            )}
        </div>
    )

    
}

export default CheckoutClient