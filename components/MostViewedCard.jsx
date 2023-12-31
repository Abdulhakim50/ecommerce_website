'use client'
import { Rating } from '@mui/material';

import truncate from '@/utils/truncate';
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';
import truncateDesc from '@/utils/trunctedDesc';
import { NcardSkeleton } from '@/utils/skeletons/skeletons';

const NewarrivalCard = ({data}) => {

    const router=useRouter()
    const productRating=data.reviews.reduce((acc,item)=>
    item.rating+acc,0)/data.reviews.length;



  return (
    <>
  
     <div className="group bg-white rounded-lg shadow-md overflow-hidden    " onClick={()=>router.push(`/productDetails/${data.id}`)} >
      <Image src={data.images[0].image} alt="Shoes" width={200} height={40}  className="w-full h-40 max-sm:h-32 object-cover" />

      <div className="p-4 max-sm:h-5">
        <p className='max-sm:hidden'>nick</p>
        <h3 className=" max-sm:text-xs font-semibold mb-2">{truncate(data.name)}</h3>
        <p className="text-gray-600 max-sm:text-sm">{formatPrice (data.price)}</p>
      </div>

      <div className="p-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity">
       {/* <button className="bg-green-500 text-white py-2 px-4 ">
          Add to Cart
  </button>*/}
      </div>
       <div><Rating value={productRating} readOnly/></div>
</div>

</>
  )
}

export default NewarrivalCard