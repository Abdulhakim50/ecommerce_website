'use client'

import React from 'react'

const Checkbox = ({label,disabled,register,id}) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
<input 

  id={id}
  disabled={disabled}

  {...register(id)}
  placeholder=""
  type="checkbox"
  className="cursor-pointer"
/>
<label
htmlFor={id}  className="fot-medium cursor-pointer"
>
    {label}

</label>
    </div>
  )
}

export default Checkbox