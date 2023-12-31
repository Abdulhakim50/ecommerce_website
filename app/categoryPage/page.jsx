import React from 'react'
import { getProductByCategory } from '@/actions/getCetagory'
import CategoryPage from './CategoryPage';

const page = async ({searchParams}) => {
    const category = searchParams?.category || '';
const products = await getProductByCategory(category)

  return (
    <div>
        <CategoryPage products={products} category={category}/>
    </div>
  )
}

export default page