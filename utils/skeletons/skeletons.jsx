

export function PcardSkeleton(){
    return  (
        <div className="relative group p-4 overflow-hidden bg-gray-200">
      <div className="w-full h-40 bg-gray-300 animate-pulse mb-2"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-gray-300 animate-pulse transform translate-y-4 hover:translate-y-0 transition duration-500 ease-in-out">
        {/* Add to Cart button skeleton */}
        {/* <button className="bg-white text-green-500 px-4 py-2 w-full hover:bg-green-500 hover:text-white transform translate-y-4 hover:translate-y-0 transition duration-300 ease-in-out animate-pulse">
          Add to Cart
        </button> */}
      </div>
      <div className="text-center">
        <p className="text-gray-600 bg-gray-300 animate-pulse mb-2 w-1/2 mx-auto"></p>
        <h2 className="text-lg font-semibold mb-2 text-[#333333] bg-gray-300 animate-pulse w-3/4 mx-auto h-4"></h2>
        <p className="text-gray-600 mb-2 text-green-500 bg-gray-300 animate-pulse w-1/4 mx-auto h-4"></p>
        <p className="text-gray-600 opacity-40 bg-gray-300 animate-pulse w-1/3 mx-auto h-3"></p>
      </div>
    </div>
     

    )
}



export function NcardSkeleton(){
    return  (
        <div className="group bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-40 max-sm:h-32 bg-gray-300 animate-pulse"></div>
  
        <div className="p-4 max-sm:h-5">
          <p className="max-sm:hidden bg-gray-300 animate-pulse w-1/2"></p>
          <h3 className="max-sm:text-xs font-semibold mb-2 bg-gray-300 animate-pulse w-3/4"></h3>
          <p className="text-gray-600 max-sm:text-sm bg-gray-300 animate-pulse w-1/4"></p>
        </div>
  
        <div className="p-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Add to Cart button skeleton */}
          {/* <button className="bg-green-500 text-white py-2 px-4 bg-gray-300 animate-pulse"></button> */}
        </div>
        
        <div className="bg-gray-300 animate-pulse w-16 h-4 mx-4 mb-4"></div>
      </div>
     

    )
}



export function CSkeleton(){
    return  (
<tr className="animate-pulse hover:bg-gray-100">
<td className="py-4 px-6 text-left border-b">
  <div className="flex items-center flex-col md:flex-row">
    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4 md:mb-0 md:mr-4"></div>
    <p className="text-lg font-semibold line-clamp-2 bg-gray-300 animate-pulse w-48 h-6"></p>
  </div>
</td>
<td className="py-4 px-6 text-left border-b bg-gray-300 animate-pulse w-24 h-6"></td>
<td className="py-4 px-6 text-left border-b">
  <div className="bg-gray-300 animate-pulse w-16 h-6"></div>
</td>
<td className="py-4 px-6 text-left border-b bg-gray-300 animate-pulse w-24 h-6"></td>
<td className="py-4 px-6 text-left border-b">
  <div className="text-red-500 hover:underline bg-gray-300 animate-pulse w-6 h-6"></div>
</td>
</tr>
   )
}
