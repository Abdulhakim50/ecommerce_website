'use client'


import React from 'react'
import { UseFormRegister } from 'react-hook-form'

const Input = ({id,label,type,disabled,register,required,errors}) => {
  return (
   <div className="w-full relative">
    <input 
    authcomplate="off"
    id={id}
    disabled={disabled}

    {...register(id,[required])}
    placeholder=""
    type={type}

    className={`
    peer
    w-full
    p-4
    pt-5
    outline-none
    bg-white
    font-light
    border-2
    rounded-nd
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    ${errors[id]? 'border-red-400':'border-slate-300'}
    ${errors[id]? 'focus:border-red-400':'focus:border-slate-300'}
    
    `}
    />
     <label htmlFor={id}
     className={`
     absolute
     cursor-text
     text-md
     duration-150
     transform
     -translate-y-3
     top-5
     z-10
     origin-[0]
     left-4
     peer-placeholder-show:scale-100
     peer-placeholder-show:translate-y-0
     peer-focus:scale-75
     peer-focus:-translate-y-4

     
     `}
     
     >
        {label}
     </label>

   </div>
  )
}

export default Input