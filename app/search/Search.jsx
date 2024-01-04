'use client'
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import FilterInput from "@/components/FilterInput";
import FilterCategory from "@/components/FilterCategory";
import Pagination from "./Pagination";
import Link from "next/link";
import { PcardSkeleton } from "@/utils/skeletons/skeletons";
import { Suspense } from "react";





const SearchPage = ({products,totalPages,query}) => {




  if(!products  ){
    return <p>No products found </p>
   }
  

  return (
    <div className="grid grid-cols-3 items-start mx-3 max-sm:grid-cols-1">
    <div className="mt-12 flex flex-col gap-5 ">
      <div className="flex justify-around items-center">
        <p className="font-semibold">Filters:</p>
        <Link href="/search" className="text-green-500 font-bold">
        Clear Filters
        </Link>
      </div>
      <hr className="w-full" />
      <FilterInput />
      <FilterCategory />
    </div>
    <div className="container  my-8 col-span-2">

      <h1 className="text-3xl font-bold mb-6 max-sm:text-cen
      ter">{query ?  `Search results for '${query}'` : 'Search results'}</h1>
      <div className="grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  items-center">
 
       {
       products.length === 0 ?  <div className="">No Products found</div>  :   
       products.map((product) => (
        <Suspense fallback={<PcardSkeleton />} key={product.id}>
          <Link key={product.id} className="relative group hover:shadow-md hover:scale-110 p-4  overflow-hidden"   href={`/productDetails/${product.id}`}>
            <Image
                 src={product.images[0].image} // Replace with the correct path to your image
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2  group-hover:opacity-75 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition duration-500 ease-in-out    ">
           { /*  <button className="bg-white text-green-500 px-4 py-2  w-full hover:bg-green-500 hover:text-white transform translate-y-4 hover:translate-y-0 transition duration-300 ease-in-out">
                Add to Cart
       </button>*/}
            </div>
            <div className="text-center">
            <p className="text-gray-600"> {product.catagory}</p>
            <h2 className="text-lg font-semibold mb-2 text-[#333333] text-[15.488px] line-clamp-2">{product.name}</h2>
            <p className="text-gray-600 mb-2 text-green-500 ">${product.price}</p>
            <p className="text-gray-600 opacity-40">(Reviews: {product.reviews.length})</p>
            </div>
          
          </Link>
          </Suspense>
        ))}
     
     </div>
        <Pagination totalPages={totalPages} />
      </div>
    </div>

     
  ); 
};

export default SearchPage;
