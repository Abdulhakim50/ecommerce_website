'use client'


import React from 'react'
import { UseFormRegister } from 'react-hook-form'

const Input = ({id,label,type,disabled,register,required,errors,className,placeholder, userReview,deliverOrder}) => {
  return (
   <div className="w-full relative">
    <input 
    authcomplate="off"
    id={id}
    disabled={disabled}

    {...register(id, {
      required: { value: required, message: `${label} is required` },
      minLength: type === 'password' ? { value: 7, message: 'Password must be at least 8 characters long' } : undefined,
      pattern: type === 'email' ? { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } : undefined,
   
    })}
    placeholder={placeholder}
    type={type}

   className={className}
    />
   
   {errors && errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id].message}
            {userReview && <span>{' '}You already gave a review for this product.</span>}
        </p>

      )}
   </div>
  )
}

export default Input