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
    <form  onSubmit={handleSubmit} id="payment-form">
        <div>
            <p>Enter your detail to complate</p>
            <AddressElement  options={{
                mode:"shipping",
                allowedCountries:["US","KE"]

            }}/>

            <h2>payment information</h2>
            <PaymentElement id="payment-element" options={{layout:"tabs"}} />
        </div>

        <div>
            Total:{formatedPrice}
        </div>
        <button >{isLoading? 'processing': 'pay now'}</button>
    </form>
  )
}

export default CheckoutForm
