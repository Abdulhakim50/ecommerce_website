'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Rating } from '@mui/material'
import { useState } from 'react'
import Input from '@/components/Input'
import Btn from '@/components/Btn'
import toast from 'react-hot-toast'
import axios from 'axios'

const AddRating = ({product,user}) => {
    const [isLoading, setisLoading] = useState(false)
    const router =useRouter()
    const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm(
        {
            defaultValues:{
                Comment:'',
                rating:0
            }
        }
    )

    const setCustomValue=(id,value) => {
        setValue(id,value,{
            shouldTouch:true,
            shouldDirty:true,
            shouldValidate:true        
        })
    }
   const onSubmit=(data)=>{
     setisLoading(true)
     if (data.rating === 0) {
        setisLoading(false)
        return toast.error('No rating selected')}
     const ratingData={...data,userId:user?.id,product:product}

     axios.post('/api/rating',ratingData).then(()=>{
        toast.success('rating submitted');
        router.refresh()
        reset()
     }).catch((error)=>{
        toast.error('someting went wrong')
     }).finally(()=>{
        setisLoading(false)
     })
   }
 



   const deliverOrder=user?.orders.some(order =>order.products.find
    (item =>item.id === product.id ) && order.deliveryStatus === 'delivered')

    const userReview=product?.reviews.find (((review)=>{
        return review.userId === user.id
    }))
    if(userReview || !deliverOrder){
        return null
    }
  return (
    <div>
     <div>Add rating</div>
    <Rating onChange={(event,newValue)=>{
        setCustomValue('rating',newValue)
    }}/>
    <Input
    id='comment'
    label="Comment"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    <Btn label={isLoading ? "Loading":'Rate Product'} onClick={handleSubmit(onSubmit)}/>
    </div>

  )
}

export default AddRating