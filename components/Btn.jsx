"use client"
import React from 'react'

const Btn = ({ label, disabled, outline, small, custom, icon: Icon, onClick }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
   disabled:opacity-70 disabled:cursor-not-allowed
   rounded-md hover:opacity-80
   transition w-full border-slate-700 flex
   items-center justify-center gap-2 ${outline ? "bg-white" : "bg-slate-700" }
   ${outline ? "bg-slate-700" : "text-white"}
   ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
   ${custom ? custom : ''}`}>
            {Icon && <Icon size={24} />}
            {label}
        </button>
    )
}

export default Btn