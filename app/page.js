
import Catagories from '@/components/Catagories'
import Hero from '@/components/Hero'
import Newarrival from '@/components/Newarrival'
import Electronics from '@/components/Electronics'
import MostViewed from '@/components/MostViewed'
import getProduct from '@/actions/getPoduct'
import Nulldata from '@/components/Nulldata'
import { SessionProvider } from 'next-auth/react'


export default async function Home({searchParams}) {
  const products =await getProduct(searchParams)

  if(products.length===0){
    return <Nulldata title="No products found. Click *All* to clear filtr"/>
  }
   function shuffleArry(array){
    for (let i =array.ength-1; i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [array[i],array[j]=[array[j],array[i]]]
    }
     return array
   }
   const dynamicProducts=shuffleArry(products)
  return (
    <main className=" ">
      
  
   <Catagories/>
    <Newarrival dynamicProducts={dynamicProducts}/>
     <MostViewed dynamicProducts={dynamicProducts}/>

  
    
  
   
    </main>
  )
}
