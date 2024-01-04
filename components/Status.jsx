import React from 'react'

const Status = ({text,icon,className}) => {
  return (
    <>
    <div className={className}>{text}</div>
    <div>{icon}</div>
    
</>
  )
}

export default Status