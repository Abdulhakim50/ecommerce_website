
'use client'
import React from 'react'
import { catagories } from '@/utils/Catagories'
import { useState } from 'react'
import Image from 'next/image'
import { set } from 'mongoose'
const Component = () => {
    const  [selected, setSelected] = useState(null)
     const [multiple, setmultiple] = useState([])
      const [enabel, setenabel] = useState(false)
      const  [color, setcolor] = useState('green')
      const [type, settype] = useState("hex")


    const handleSingle =(currentCat)=>{
    setSelected(currentCat === selected ? null : currentCat)
    }

    const handleMulti = (currentCat)=>{
       const cMultiple =[...multiple]

       const currentIx = cMultiple.indexOf(currentCat)
       if(currentIx === -1) cMultiple.push(currentCat ); else cMultiple.splice(currentIx,1)
       setmultiple(cMultiple)
    }
   
    const random=(length)=>{
    return Math.floor(Math.random()*length)
    }

    const handleHex =()=>{
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let strin ="#"

        for (let i =0 ; i<6; i++){
            strin += hex[random(hex.length)]

            setcolor(strin)
        }

    }

    const handleColor =()=>{
        const r = random(256)
        const g= random(256)
        const b = random(256)
        setcolor(`rgb(${r},${g},${b})`)
    }
  return (
    <>
  
    <div>

           <div className=' cursor-pointer' onClick={()=>setenabel(!enabel)}>{enabel ? 'disabel multiSelection' : 'enabel MultiSelection'}</div>
        {
        catagories === 0 ? 'product not found':
        catagories.map((cat)=>{
       return  <div>
     
          <div onClick={enabel ?()=>handleMulti(cat.label)  :() =>handleSingle(cat.label)} className=' cursor-pointer'>
                <div >{cat.label}</div>
                <div >+</div>
            </div>
            {   enabel ?  multiple.indexOf(cat.label) !== -1 &&  (<Image src={cat.img} alt='image' width={200} height={200}/>)
                :selected === cat.label &&
             (   <Image src={cat.img} alt='image' width={200} height={200}/>  )
                
            }
            </div>
        })}
    </div>
    <div onClick={()=>settype("hex")}>Hex</div>
    <div onClick={()=>settype(!type)}>{type=== "hex" ? ()=>settype("hex") && 'eabel RGB' :  ()=>settype("rgb") && 'enabel Hex'}</div>
    <div style={{
        background:color,
        width:'200px',
        height:'200px'
        
    }} >
   a
    </div>
    <div onClick={ type === "hex" ? handleHex:handleColor}>chamge</div>
    <div>{color}</div>
    <div>{type}</div>
    </>
  )
}

export default Component