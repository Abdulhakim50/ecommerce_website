'use client'
import { ClassNames } from '@emotion/react';
import  { useState,useEffect } from 'react';
import Image from 'next/image';
import { MdOutlineManageAccounts } from 'react-icons/Md'
import { AiOutlineShoppingCart} from 'react-icons/Ai'
import { FiMenu } from 'react-icons/Fi';
import { FiHeart } from 'react-icons/Fi';
import { FiSearch } from 'react-icons/Fi';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';



const SearchWithCategory = (catagory,query) => {
 
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
   const [open, setopen] = useState(false)
   const [ope, setope] = useState(false)

   const router = useRouter()

   const handle=()=>{
    setopen(!open)
   }
   const handles=()=>{
    setope(!ope)
   }


  



  return (
    <>
 

    <div className='flex items-center justify-evenly pt-10' >
        <div className='md:hidden text-3xl ' onClick={handles}>
         <FiMenu className=''/>  
        </div>
     
      <div className=''>
        <p>Ethiomarket.com</p>
      </div> 
     
      <div className='flex border border-green-500  max-lg:border-none'>
        <div className='max-md:hidden'>
       <select className=' border-none h-[60px] px-10  '   
        >
        <option value="All Categories" className=''>All Categories</option>
        <option value="mobile phones">mobile phones</option>
        <option value="laptop">laptop</option>
        <option value="Tv">Tv</option>
        <option value="cloths">cloths</option>
        <option value="shoes">shoes</option> 
        <option value="bag">bag</option> 
       </select>
        </div>
        <div className="h-8 w-[1px] bg-gray-300 mt-3 ml-[15px] max-lg:hidden "></div>
      
       
        <div className='flex  max-lg:relative'>
         
         <input type="text" onChange={(e) => {handleSearch(e.target.value);
        }}   defaultValue={searchParams.get('query')?.toString()} placeholder='what are you looking for?'  className={` text-black border-l-0  ml-1 px-20  ${open? 'max-lg:absolute max-lg:top-[60px] max-lg:left-[-220px] max-lg:w-[500px] max-sm:w-[400px] max-sm:w-[400px] max-sm:left-[-150px] max-lg:border max-lg:border-green-500 max-lg:px-[10px] max-lg:py-[10px] max-lg:rounded-full transform translate-y-4 translate-y-0 transition duration-500 ease-in-out ':'max-lg:hidden'} `} />
         <FiSearch className={`lg:hidden ${open? 'max-lg:absolute max-lg:top-[70px] max-lg:left-[250px] max-sm:left-[220px] text-2xl': 'max-lg:hidden'}`}    />
          <FiSearch className=' bg-green-600 w-[100px] h-[60px]  text-white max-lg:bg-white max-lg:text-green-500 max-lg:text-xl' />
         </div>
         <div className='search-results'>
        {/* Display search results here */}
       
      </div>
    
      </div>
      <div className='flex gap-7 '> 
      <div className='flex flex-col text-center items-center '>
        <FiHeart className=' font-normal text-4xl'/>
        <div className=' text-sm'>Wishlist</div>
        </div>
      <div className='flex flex-col text-center items-center '>
        <AiOutlineShoppingCart className=' text-4xl'/>
        <p className=' text-sm'>Cart</p>
        </div>
        
        <div className='flex flex-col text-center items-center '>
        <MdOutlineManageAccounts className=' text-4xl'/>
        <div className=' text-sm'>Account</div>
        </div>
        
      </div>
    </div>

    <div className='w-full bg-green-500 h-[60px] mt-5  '>
    <div className='flex justify-evenly gap-0 '>
  
    <div className='flex gap-4 mt-5 '>
    <div>Home</div>
      <div>Products</div>
      <div>Contact Us</div>
    </div>
      
    </div>
    </div>
    
     <div className='flex justify-evenly hro bg-no-repeat mt-0px w-full bg-gray-400 '>

      <div className='  bg-white h-[600px] w-[300px]  flex flex-col  relative top-[-60px] max-[1019px]:hidden'>
      <div className=' p-3 flex gap-3 items-center  '>
        <div className='text-2xl text-green-500'><FiMenu/></div>
        <p className=' text-2xl font-extrabold text-green-500'>CATEGORIES</p>
      
      </div> 
      <div className=' '>
      <div className='border-y p-4 mt-1 '>Shoes</div> 
      <div className='border-y p-4'>Mobile Phones</div>
      <div className='border-y p-4'>Laptop</div>
      <div className='border-y p-4'>Tv</div>
      <div className='border-y p-4'>Electronics</div>
      <div className='border-y p-4'>bags</div>
      <div className='border-y p-4'>bags</div>
      <div className='border-y p-4'>bags</div>
      <div className='border-y p-4'>bags</div>
        <div className='border-y p-4'>bags</div>
      </div>
      </div>

      <div className='flex flex-col gap-10 mt-10 ' >
        <div>
       <p className=' text-lg font-bold'>UP TO 50% OFF</p>
        <p className=' text-5xl font-bold  text-green-700'>Shirt For Man</p>
        
        </div>
        <p className='  line'>Maboriosam in a nesciung eget magnae
dapibus disting tloctio in the find it pereri
odiy maboriosm.</p>
       <button>Shop Now</button>
      </div>
     </div>
      

      <div className='mt-20 text-center font-bold text-lg'>
     <p>New Arrivals</p>
     <div className=' grid lg:grid-cols-6 mt- md:grid-cols-3 sm:grid-cols-2 mx-10 gap-4' >
     
     <div className="group bg-white rounded-lg shadow-md overflow-hidden ">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <p>nick</p>
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 ">
          Add to Cart
        </button>
      </div>
   
     
      </div> 
      <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 ">
          Add to Cart
        </button>
      </div>
   
     
      </div> 
       <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 ">
          Add to Cart
        </button>
      </div>
      </div>
     
       
      <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
      </div>
     
      
      <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
      </div>
     
     
      <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <img src="camera.jpg" alt="image" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Abdulhakim</h3>
        <p className="text-gray-600">$2000</p>
      </div>

      <div className="p-4 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-green-500 text-white py-2 px-4 ">
          Add to Cart
        </button>
      </div>
      </div>
     
      </div>
      </div>
  
     <div className='mt-20 text-center font-bold text-lg'>
     <p>Most viewed</p>
     <div className=' grid lg:grid-cols-6 mt- md:grid-cols-3 sm:grid-cols-2 mx-10 gap-4' >
     
     <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <div class="relative">
    <img src="/camera.jpg" alt="Product" class="w-full h-48 object-cover"/>
    <div class="absolute top-0 right-0 p-2">
      <button class="bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
        <svg class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
  </div>
  <div class="p-4">
    <h3 class="text-lg font-semibold text-gray-800">Product Name</h3>
    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="flex items-center mt-4">
      <span class="text-xl font-bold text-gray-800">$99.99</span>
      <span class="ml-2 text-sm text-gray-500 line-through">$120.00</span>
      <span class="ml-2 text-sm text-green-500">Save 17%</span>
    </div>
    <div class="mt-4 hidden group-hover:block">
      <a href="#" class="bg-green-500 text-white px-4 py-2 rounded-lg w-full text-center">Add to Cart</a>
    </div>
  </div>
</div>

     
    
      <div className='border border-green-500 h-80'>
      <div className=''>
      <Image src="/camera.jpg" width={100} height={100} className='m-auto'/>
      </div>
      <hr />
      <div>
      <p className=''>Abdulhakim</p>
      </div>
     
      </div> 
      <div className='border border-green-500 h-80'>
      <div className=''>
      <Image src="/camera.jpg" width={100} height={100} className='m-auto'/>
      </div>
      <hr />
      <div>
      <p className=''>Abdulhakim</p>
      </div>
     
      </div>  
      <div className='border border-green-500 h-80'>
      <div className=''>
      <Image src="/camera.jpg" width={100} height={100} className='m-auto'/>
      </div>
      <hr />
      <div>
      <p className=''>Abdulhakim</p>
      </div>
     
      </div> 
      <div className='border border-green-500 h-80'>
      <div className=''>
      <Image src="/camera.jpg" width={100} height={100} className='m-auto'/>
      </div>
      <hr />
      <div>
      <p className=''>Abdulhakim</p>
      </div>
     
      </div> 
      <div className='border border-green-500 h-80'>
      <div className=''>
      <Image src="/camera.jpg" width={100} height={100} className='m-auto'/>
      </div>
      <hr />
      <div>
      <p className=''>Abdulhakim</p>
      </div>
     
      </div> 
     
      </div>
     </div>



    <div className='fixed bottom-0 w-full bg-blue-400 h-[100px] flex justify-evenly md:hidden'>
      <p className=' text-2xl font-black'>Home</p>
      <p className=' text-2xl font-black'>Catgory</p>
      <p className=' text-2xl font-black'>Cart</p>

      </div>
    
      link
     
    </>
  );
};

export default SearchWithCategory;
