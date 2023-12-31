
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import CartProvider from '@/providers/CartProvider'
import { SessionProvider } from 'next-auth/react'
import NavHome from '@/components/NavHome'
import Catagories from '@/components/Catagories'
import FooterNav from '@/components/FooterNav'
import { getCurrentUser } from '@/actions/getCurrentUser'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ethiomarket.com',
  description: 'the largest market place in ethiopia',
}
export const dynamic = "force-dynamic";
export default async function RootLayout({  children }) {

const currentUser= await getCurrentUser()


  return (
    <html lang="en">
    
      <body className='bg-white' >

        <Toaster toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#fff"
          }
        }} />


        <CartProvider>

          <div>
        
  <NavHome/>
     
          
            <main >

              {children}

            </main>
         <Footer/>
          <FooterNav currentUser={currentUser}/>
          </div>

        </CartProvider>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js" async></script>
      </body>
    </html>
  )


}
