import React from 'react'

const truncate = (str) => {
 if(str.length<25)return str
  

   return str.substring(0,25) + "...";
}

export default truncate