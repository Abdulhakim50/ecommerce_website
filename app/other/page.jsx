import React from 'react'

const page = () => {
  return (
   

<div class="bg-gray-100 h-screen flex items-center justify-center">

<div class="bg-white p-8 rounded shadow-md max-w-md w-full">

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>

    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
        <input type="text" id="firstName" name="firstName" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="John"/>
    </div>


    <div class="mb-4">
        <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input type="text" id="lastName" name="lastName" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Doe"/>
    </div>


    <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="********"/>
    </div>

   
    <button class="bg-blue-500 text-white rounded-full px-4 py-2 w-full hover:bg-blue-600">
        Sign Up
    </button>

    
    <button class="bg-red-500 text-white rounded-full px-4 py-2 w-full mt-4">
        Sign Up with Google
    </button>

    <p class="mt-4 text-gray-600 text-sm text-center">
        Already have an account? <a href="#" class="text-blue-500">Log in</a>
    </p>

</div>

</div>

  )
}

export default page