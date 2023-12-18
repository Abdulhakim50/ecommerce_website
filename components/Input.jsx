'use client'


import React from 'react'
import { UseFormRegister } from 'react-hook-form'

const Input = ({id,label,type,disabled,register,required,errors,className}) => {
  return (
   <div className="w-full relative">
    <input 
    authcomplate="off"
    id={id}
    disabled={disabled}

    {...register(id,[required])}
    placeholder=""
    type={type}

   className={className}
    />
   

   </div>
  )
}

export default Input