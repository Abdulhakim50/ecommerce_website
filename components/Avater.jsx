import React from 'react'
import { FiPauseCircle } from 'react-icons/Fi' 
import Image from 'next/image'

const Avater = ({src} )=> {
if (src){
  return  <Image
    src={src}
    alt='Avater'
    className="rounded-full"
    height="30"
    width="30"
    />
}
  return (
    <FiPauseCircle size={24}/>
  )
}

export default Avater