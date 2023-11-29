'use client'
import { Rating } from '@mui/material';

import truncate from '@/utils/truncate';
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';
import truncateDesc from '@/utils/trunctedDesc';

const NewarrivalCard = ({data}) => {

    const router=useRouter()
    const productRating=data.reviews.reduce((acc,item)=>
    item.rating+acc,0)/data.reviews.length;



  return (
    <div className="flex h-[440px]" onClick={()=>router.push(`/productDetails/${data.id}`)} >
    <div className="card  shadow-xl  bg-yellow-400 w-[600px]">
  <figure>
    <Image src={data.images[0].image} alt="Shoes" width={200} height={200} />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{truncate(data.name)}</h2>
    <p>{truncateDesc (data.description)}</p>
    <div><Rating value={productRating} readOnly/></div>
    <div>{formatPrice (data.price)}</div>
    <div className="card-actions justify-end">
      
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div> 
  )
}

export default NewarrivalCard