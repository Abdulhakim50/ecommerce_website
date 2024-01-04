
import Catagories from '@/components/Catagories'
import  HeroSlider from '@/components/HeroSlider'
import Newarrival from '@/components/Newarrival'
import Electronics from '@/components/Electronics'
import MostViewed from '@/components/MostViewed'
import getProduct from '@/actions/getPoduct'
import Nulldata from '@/components/Nulldata'
import { SessionProvider } from 'next-auth/react'
import CategorySection from '@/components/CategorySection'
import getProductById from '@/actions/getProductById'


export default async function Home({searchParams,params}) {
  const products =await getProduct(searchParams)
  const mostViewed =await getProduct(searchParams)


{ /* if(products.length===0){
    return <Nulldata title="No products found. Click *All* to clear filtr"/>
  }*/}
   function shuffleArry(array){
    for (let i =array.ength-1; i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [array[i],array[j]=[array[j],array[i]]]
    }
     return array
   }
   const dynamicProducts=shuffleArry(products)
  return (
    <main >
  
   <Catagories/>
   <HeroSlider/>
    <div className="flex flex-col gap-32 ">
    <Newarrival dynamicProducts={dynamicProducts}/>
     <CategorySection/>
     <MostViewed mostViewed={mostViewed}/>

     </div>
    
  
   
    </main>
  )
}
