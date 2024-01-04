import React from 'react';
import Link  from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:mt-60">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="mb-8 lg:col-span-2">
          <h4 className="text-3xl font-bold mb-4 max-sm:text-center">ethioMarket.com</h4>
          <p className="text-gray-400 max-w-md  text-justify max-sm:ml-5 mr-5">
            EthioMarket.com, the best marketplace to buy and sell products and services among our customers. We passionately believe in great bargains and excellent services for buyers and sellers. Most importantly, we firmly believe in high-quality products and exceptional customer services.
          </p>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4 ">Useful Links</h4>
          <ul className="list-none">
            <li><Link href="/" className="text-gray-400 hover:text-blue-500">Home</Link></li>
            <li><Link href="/cart" className="text-gray-400 hover:text-blue-500">Cart</Link></li>
            <li><Link href="/orders" className="text-gray-400 hover:text-blue-500">Orders</Link></li>
            <li><Link href="/login" className="text-gray-400 hover:text-blue-500">LogIn</Link></li>
            <li><Link href="register" className="text-gray-400 hover:text-blue-500">SignUp</Link></li>
          </ul>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4">Contact US</h4>
          <ul className="list-none">
            <li><Link href="#payment" className="text-gray-400 hover:text-blue-500">ethioMarket@qinash.com</Link></li>
            <li><Link href="#shipping" className="text-gray-400 hover:text-blue-500">+251 903 295 555</Link></li>
            <li><Link href="#terms" className="text-gray-400 hover:text-blue-500">Cape Verde St, The Place 3rd Floor</Link></li>
          </ul>
        </div>

        <div className="mb-8 max-sm:text-center">
          <h4 className="text-lg font-bold mb-4">Social media</h4>
          <ul className="list-none">
            <li><Link href="#solutions" className="text-gray-400 hover:text-blue-500">Facebook</Link></li>
            <li><Link href="#site-builder" className="text-gray-400 hover:text-blue-500">Instagram</Link></li>
            <li><Link href="#erp" className="text-gray-400 hover:text-blue-500">Telegram</Link></li>
            <li><Link href="#school" className="text-gray-400 hover:text-blue-500">Twitter</Link></li>
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
