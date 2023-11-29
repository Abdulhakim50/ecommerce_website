import React from 'react'
import {useDropzone} from 'react-dropzone'
import { useCallback } from 'react'

const SelectImg = ({items,handleFileChange}) => {
    const onDrop =useCallback(
      (acceptedFiles) => {
        if(acceptedFiles.length>0){
          handleFileChange(acceptedFiles[0])
        }
       
      },
      [],

     
    )
    const {getRootProps,getInputProps,isDragActive}=useDropzone({
        onDrop,accept:{"image/*":[".jpeg",".png"]}
      })
    
  return (
    <div {...getRootProps()}>
    <input {...getInputProps()} />
    {isDragActive ? (<p>Drop the Image here</p>) : (<p>+ {items?.color} image</p>)}
    </div>
  )
}

export default SelectImg