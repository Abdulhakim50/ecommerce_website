
'use client'
import React from 'react'
import toast from 'react-hot-toast';
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { useState, useEffect, useCallback } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';








const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const  CheckoutClient =  () => {
    const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [clientSecret, setClientSecret] =useState("");
    const [paymentSuccess, setpaymentSuccess] =useState(false)

    const router = useRouter();
  



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
            {loading && <div className='text-center justify-center '><span className="loading loading-dots loading-xs"></span>
<span className="loading loading-dots loading-sm"></span>
<span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span></div>}
            {error && (
                <div>someting want wrong</div>
            )}



            {paymentSuccess && (

                <div className='flex flex-col items-center  my-10 gap-3'>
                    <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 bg-green-500 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

                    <div className='text-green-600'>Payment Success</div>
                    </div>
                    <div className='bg-green-500 text-white p-3'>
                        <button
                            onClick={() => router.push("/orders")}
                        >View Your Orders</button>
                    </div>
                </div>
            )}
        </div>
    )

    
}

export default CheckoutClient