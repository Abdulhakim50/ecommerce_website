import React from 'react'

const page = () => {
  return (
  
   
  
   
  
    <div class="bg-gray-100">
      <div class="container mx-auto p-8">
        <h1 class="text-4xl font-extrabold mb-8 text-green-600 text-center">Your Shopping Cart</h1>
    
        <div class="overflow-x-auto">
          <table class="min-w-full border rounded-lg overflow-hidden">
            <thead class="bg-green-500 text-white">
              <tr>
                <th class="py-2 px-4 text-left border-b">Product</th>
                <th class="py-2 px-4 text-left border-b">Price</th>
                <th class="py-2 px-4 text-left border-b">Quantity</th>
                <th class="py-2 px-4 text-left border-b">Total</th>
                <th class="py-2 px-4 text-left border-b">Remove</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr class="hover:bg-gray-100">
                <td class="py-4 px-6 text-left border-b">
                  <div class="flex items-center flex-col md:flex-row">
                    <img src="camera.jpg" alt="Product Image" class="w-16 h-16 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg"/>
                    <div>
                      <p class="text-lg font-semibold">Product Name</p>
                      <p class="text-gray-500">Some product description if needed</p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 text-left border-b">$50.00</td>
                <td class="py-4 px-6 text-left border-b">
                  <input type="number" class="w-16 px-2 py-1 border" value="2"/>
                </td>
                <td class="py-4 px-6 text-left border-b">$100.00</td>
                <td class="py-4 px-6 text-left border-b">
                  <button class="text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    
        <div class="mt-8 p-4 bg-green-100 rounded-lg shadow-md w-full">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-green-600">Cart Summary</h2>
          </div>
          <div class="flex justify-between items-center mb-2">
            <p class="text-green-600">Subtotal:</p>
            <p class="text-gray-700">$200.00</p>
          </div>
          <div class="flex justify-between items-center mb-2">
            <p class="text-green-600">Total:</p>
            <p class="text-gray-700">$200.00</p>
          </div>
          <div class="flex justify-between items-center mb-4">
            <button class="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Clear Cart</button>
            <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Proceed to Checkout</button>
          </div>
          <p class="text-gray-600 mb-2">Taxes and shipping calculated at checkout.</p>
          <a href="#" class="flex items-center text-green-600">
            <i class="fas fa-arrow-left mr-2"></i> Continue Shopping
          </a>
        </div>
      </div>
    </div>
 
    


    


    
    



    


  )
}

export default page
