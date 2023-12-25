'use client'

import React from 'react'
import toast from 'react-hot-toast';
import {useCart} from "@/hooks/useCart"
import formatPrice from '@/utils/formatPrice';
import { AddressElement,PaymentElement ,useStripe,useElements} from '@stripe/react-stripe-js';
import {useState,useEffect} from "react";



const CheckoutForm = ({clientSecret,handleSetPaymentSuccess}) => {
    const{cartTotalAmount,handleClearCart, handleSetPaymentIntent}=useCart();
    const elements =useElements();
    const stripe=useStripe()
    const [isLoading,setisLoading]=useState(false)

    const formatedPrice =formatPrice(cartTotalAmount)



    useEffect(() => {
      if(!stripe){
        return
      }
    if(!clientSecret){
        return;
    }
    handleSetPaymentSuccess(false);
      
    }, [stripe])

    const handleSubmit =async (e)=>{

        e.preventDefault();

        if(!stripe ||  !elements){
              return;
        }
        
        setisLoading(true);

        stripe.confirmPayment({
            elements, redirect:'if_required'
        }).then (result=>{
            if(!result.error){
                toast.success("checkout success");
                handleClearCart();
                handleSetPaymentSuccess(true);
                handleSetPaymentIntent(null);
            }
            setisLoading(false);
            
        });
    };

  return (
    <form onSubmit={handleSubmit} id="payment-form" className="container mx-auto max-w-2xl p-6 bg-white shadow-md rounded-lg">
    <div className="mb-6">
      <p className="font-semibold mt-6 mb-4 text-center text-green-500">Enter your details to complete</p>
      <div className="mt-4">
        <AddressElement
          options={{
            mode: "shipping",
            allowedCountries: ["US", "KE", "ET"],
          }}
        />
      </div>
  
      <h2 className="font-semibold mt-6 mb-4 text-center text-green-500">Payment Information</h2>
      <div className="border p-4 rounded-md bg-gray-100">
        <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      </div>
    </div>
  
    <div className="py-4 text-center text-gray-700 text-2xl font-bold">
      Total: {formatedPrice}
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
      {isLoading ? 'Processing' : 'Pay Now'}
    </button>
  </form>
  
  
  )
}

export default CheckoutForm
