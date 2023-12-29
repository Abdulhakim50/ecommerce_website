
'use client'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { catagories } from '@/utils/Catagories'


const page = () => {
  const [selected,setSelected]=useState(null)
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
  }
    


  return (
   <>
<div>
  <button className={enable ?'bg-red-500 p-3 rounded-lg text-white transition-transform': 'bg-green-500 p-3 rounded-lg text-white'} onClick={() => setEnabel(!enable)}>{enable ?'Disable Multiple Select'  : 'Enable Multiple Select' } </button>
  {catagories.map((cat)=>(
   <div className='flex flex-col'>
      <div className='flex cursor-pointer' onClick={enable ? ()=>handlemultiple(cat.label) :()=>handleOnChange(cat.label)}>
      <div>{cat.label}</div>
      <div>+</div>
      </div>
    {enable  ?  multiple.indexOf(cat.label) !== -1 &&
      ( <Image src={cat.img} width={200} height={200}  /> ): 
      selected === cat.label &&   ( <Image src={cat.img} width={200} height={200}  /> )
    }

    </div>
  ))}
</div>

<div style={{
  width:'100vw',
  height:"100vh",
  backgroundColor:color,
  color:'white'

}} className='flex gap-5 justify-center'>
  <button onClick={type === 'hex' ? hexg : rgbg}>random generation</button>
  <button onClick={()=> settype('hex')}> hex type</button>
  <button onClick={()=>settype('rgb')}> rgb type</button>
</div>
  <div>
    <h1>{type === 'hex' ? 'hex' : 'rgb'}</h1>
    <h1>{color}</h1>
  </div>


  <div>
    {
  
    [Array(noStars)].map((_,index)=>{
      index+=1
      return <div

      className={index <= (hover || rating )? 'bg-green-700': 'bg-black'}
      key={index}
      onClick={()=>handle(index)}
       onMouseMove={()=> handleM(index)}
       onMouseLeave={()=> handleL()}
       width={40}
      >0</div>

    })}
  </div>
   </>
  )
}

export default page