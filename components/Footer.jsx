import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="mb-8 lg:col-span-2">
          <h4 className="text-3xl font-bold mb-4">ethioMarket.com</h4>
          <p className="text-gray-400 max-w-md">
            EthioMarket.com, the best marketplace to buy and sell products and services among our customers. We passionately believe in great bargains and excellent services for buyers and sellers. Most importantly, we firmly believe in high-quality products and exceptional customer services.
          </p>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4 ">Useful Links</h4>
          <ul className="list-none">
            <li><a href="#about" className="text-gray-400 hover:text-blue-500">Home</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-blue-500">Cart</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Orders</a></li>
            <li><a href="#app" className="text-gray-400 hover:text-blue-500">LogIn</a></li>
            <li><a href="#marketplace" className="text-gray-400 hover:text-blue-500">SignUp</a></li>
          </ul>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4">Contact US</h4>
          <ul className="list-none">
            <li><a href="#payment" className="text-gray-400 hover:text-blue-500">ethioMarket@qinash.com</a></li>
            <li><a href="#shipping" className="text-gray-400 hover:text-blue-500">+251 903 295 555</a></li>
            <li><a href="#terms" className="text-gray-400 hover:text-blue-500">Cape Verde St, The Place 3rd Floor</a></li>
          </ul>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4">Social media</h4>
          <ul className="list-none">
            <li><a href="#solutions" className="text-gray-400 hover:text-blue-500">Facebook</a></li>
            <li><a href="#site-builder" className="text-gray-400 hover:text-blue-500">Instagram</a></li>
            <li><a href="#erp" className="text-gray-400 hover:text-blue-500">Telegram</a></li>
            <li><a href="#school" className="text-gray-400 hover:text-blue-500">Twitter</a></li>
            <li><a href="#partner" className="text-gray-400 hover:text-blue-500">Ashewa</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <strong className="text-gray-400">Copyright © 2023 ethiomarket.com. All rights reserved.</strong>
      </div>
    </footer>
  );
};

export default Footer;
