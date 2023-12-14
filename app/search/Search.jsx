'use client'
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';




const SearchPage = ({products}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePrice =()=>{
    const params = new URLSearchParams(searchParams);
    replace(`${pathname}?${params.toString()}`);

  }
  return (
    <div>
      <h1 onClick={handlePrice} >-500</h1>
      <h1>Search Results</h1>
      <div className="container mx-auto my-8">
    <h1 className="text-3xl font-bold mb-6">Products by Category</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 
       { products.map((product) => (
          <div key={product.id} className="relative group bg-white p-4 rounded-md shadow-md overflow-hidden">
            <Image
                 src={product.images[0].image} // Replace with the correct path to your image
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2 rounded-md group-hover:opacity-75 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition duration-500 ease-in-out hover:border hover:border-b-2 hover:border-black ">
              <button className="bg-white text-green-500 px-4 py-2  w-full hover:bg-green-500 hover:text-white transform translate-y-4 hover:translate-y-0 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-600">Category: {product.catagory}</p>
            <p className="text-gray-600">Reviews: {product.reviews.length}</p>
          </div>
        ))}
     
    </div>
    </div>
     
    </div>
  );
};

export default SearchPage;
