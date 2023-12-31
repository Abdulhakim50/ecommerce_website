
'use client'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { catagories } from '@/utils/Catagories'


const page = () => {
  {/*const [selected,setSelected]=useState(null)
  const [enable,setEnabel]=useState(false)
  const  [multiple, setmultiple] = useState([])
  const  [color, setcolor] = useState("#000000")
  const [type, settype] = useState("hex")
   const [hover, sethover] = useState(0)
   const [rating, setrating] = useState(0)

  const noStars = 6
  function handleOnChange (categoryid){
       setSelected(categoryid ===  selected ? null : categoryid );
  }
  function handlemultiple (categoryid){
    const  mlt=[...multiple]
    const findId= mlt.indexOf(categoryid)
    if(findId ===  -1)  mlt.push(categoryid) 
    else mlt.splice(findId,1)

    setmultiple(mlt)
  }
  
function randomm (length){
 return  Math.floor(Math.random()*length)
}

  function hexg(){
    const hex =[1,2,3,4,5,6,7,8,9,"A",'B',"C","D","E","F"]
      let hexColor ="#"

      for(let i=0 ;i<6;i++){
        hexColor += hex[randomm(hex.length)]
      }
      setcolor(hexColor)
  }
  function rgbg (){
   const r=randomm(256)
   const g =randomm(256)
   const b =randomm(256)
   setcolor(`rgb(${r},${g},${b})`)
  }
  useEffect(() => {
    if(type === 'rgb') rgbg() 
     else  hexg()
  }, [type])

  function handle (index){
     setrating(index)
  }
  function handleM (index){
    sethover(index)
  }
  function handleL (){
    sethover(rating)
  }*/}
    


  return (
 

   

<div class="container mx-auto"> <div class="bg-gray-100 py-16 px-4"> <h2 class="text-3xl font-semibold mb-6">1 in 1 Convertible Sofa Bed</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="bg-white p-4 rounded"> <h3 class="text-xl font-semibold mb-2">Details</h3> <ul class="text-gray-600"> <li>Price: 14,999 EIB</li> <li>Brand: 2 in 1 Convertible Sofa Bed</li> </ul> </div> <div class="bg-white p-4 rounded"> <h3 class="text-xl font-semibold mb-2">Product Features</h3> <ul class="text-gray-600"> <li>Conversion between a sofa and a bed</li> <li>Wooden frame and cushions</li> <li>Size: 195x76 cm</li> </ul> </div> </div> </div> </div>
  )
}

export default page