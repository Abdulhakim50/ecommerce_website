import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-100 py-12 bord  mt-40">
     <div class="container mx-auto flex flex-wrap justify-around">
         <div class="w-full mb-8 items-center">
             <h4 class="text-lg font-bold mb-4 text-green-500">About ethioMarket</h4>
             <p class="text-gray-600 mb-4 max-w-[500px] ">We passionately believe in great bargains and excellent services for buyers and sellers. Most importantly, we firmly believe in high-quality products and exceptional customer services.</p>
         </div>
 
         <div class="w-full md:w-1/4 mb-8  ">
             <h4 class="text-lg font-bold mb-4 text-green-500">Useful Links</h4>
             <ul class="list-none">
                 <li><a href="#about" class="text-gray-600 hover:text-blue-500">About Ashewa</a></li>
                 <li><a href="#faq" class="text-gray-600 hover:text-blue-500">FAQ</a></li>
                 <li><a href="#contact" class="text-gray-600 hover:text-blue-500">Contact Us</a></li>
                 <li><a href="#app" class="text-gray-600 hover:text-blue-500">Mobile App</a></li>
                 <li><a href="#marketplace" class="text-gray-600 hover:text-blue-500">Explore Our Marketplace</a></li>
             </ul>
         </div>
 
         <div class="w-full md:w-1/4 mb-8 text-green-500">
             <h4 class="text-lg font-bold mb-4">Join Our Community</h4>
             <ul class="list-none">
                 <li><a href="#categories" class="text-gray-600 hover:text-blue-500">Browse Categories</a></li>
                 <li><a href="#community" class="text-gray-600 hover:text-blue-500">Join Our Community</a></li>
                 <li><a href="#sell" class="text-gray-600 hover:text-blue-500">Sell on our Marketplace</a></li>
             </ul>
         </div>
 
         <div class="w-full md:w-1/4 mb-8 text-green-500">
             <h4 class="text-lg font-bold mb-4">Customer Service</h4>
             <ul class="list-none">
                 <li><a href="#payment" class="text-gray-600 hover:text-blue-500">Payment Methods</a></li>
                 <li><a href="#shipping" class="text-gray-600 hover:text-blue-500">Shipping</a></li>
                 <li><a href="#terms" class="text-gray-600 hover:text-blue-500">Terms and Conditions</a></li>
                 <li><a href="#privacy" class="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
             </ul>
         </div>
 
         <div class="w-full md:w-1/4 mb-8 text-green-500">
             <h4 class="text-lg font-bold mb-4">Smart Services</h4>
             <ul class="list-none">
                 <li><a href="#solutions" class="text-gray-600 hover:text-blue-500">Smart Solutions</a></li>
                 <li><a href="#site-builder" class="text-gray-600 hover:text-blue-500">Smart Site Builder</a></li>
                 <li><a href="#erp" class="text-gray-600 hover:text-blue-500">Smart ERP System</a></li>
                 <li><a href="#school" class="text-gray-600 hover:text-blue-500">Smart School Management</a></li>
                 <li><a href="#partner" class="text-gray-600 hover:text-blue-500">Ashewa Partner</a></li>
             </ul>
         </div>
     </div>
 </footer>
 
  );
};

export default Footer