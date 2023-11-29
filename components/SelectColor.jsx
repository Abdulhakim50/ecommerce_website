'use client'
import  {useEffect,useState,useCallback} from 'react';
import React from 'react'
import SelectImg from './SelectImg'
import Btn from './Btn';
const SelectColor = ({items,addImageTOState,removeImageFormState,isProductCreated}) => {

const [isSelected, setisSelected] = useState(false)
const [file, setfile] = useState(null)

useEffect(() => {
  if(isProductCreated){
    setisSelected(false)
    setfile(null);

   
  }
}, [isProductCreated])

const handleFileChange = useCallback(
    (value) => {
        setfile(value);
        addImageTOState({...items,image:value}) 
    },
    [],
  )
  const handleCheck =useCallback(
    (e) => {
     setisSelected(e.target.checked)

     if(!e.target.checked){
        setfile(null);
        removeImageFormState(items)
     }
    },
    [],
  )
  
  

  return (
    <div>
        <div>
            <input type="checkbox" id={items.color} checked={isSelected} onChange={handleCheck}/>
            <label htmlFor="">{items.color}</label>
        </div>
        {isSelected && !file &&(
          <div>
         <SelectImg  items={items}  handleFileChange={handleFileChange}/>
          </div>  
        )
}
{file && (
    <div>
        <p>{file?.name}</p>
        <div>
            <Btn
            label="cancle"
            onClick={()=>{
                setfile(null)
                removeImageFormState(items)

            }}
            />
        </div>
    </div>
)}
    </div>
  )
}

export default SelectColor