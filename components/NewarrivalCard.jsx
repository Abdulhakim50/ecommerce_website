'use client'
import { Rating } from '@mui/material';

import truncate from '@/utils/truncate';
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';
import truncateDesc from '@/utils/trunctedDesc';
import { useCart } from '@/hooks/useCart';
import Btn from './Btn';
import { Suspense, useEffect } from 'react';
import { PcardSkeleton } from '@/utils/skeletons/skeletons';

const NewarrivalCard = ({data}) => {



    const router=useRouter()
    const productRating=data.reviews.reduce((acc,item)=>
    item.rating+acc,0)/data.reviews.length;



  return (
    <>
    <Suspense fallback={<PcardSkeleton/>}>
     <div className="group bg-white rounded-lg shadow-md overflow-hidden    " onClick={()=>router.push(`/productDetails/${data.id}`)} >
      <Image src={data.images[0].image} alt="Shoes" width={200} height={40}  className="w-full h-40 max-sm:h-32 object-cover" />

      <div className="p-4 max-sm:h-5">
        <p className='max-sm:hidden text-base opacity-20'>{data.catagory}</p>
        <h3 className=" max-sm:text-xs text-lg font-medium mb-2 opacity-[90%]">{truncate(data.name)}</h3>
        <p className="text-green-600 max-sm:text-sm ">{formatPrice (data.price)}</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
       {/* <button className="bg-green-500 text-white py-1 px-4 "  >
         Add To Cart
  </button> */}
      </div>
       <div><Rating value={productRating} readOnly/></div>
</div>
</Suspense>
</>
  )
}

export default NewarrivalCard