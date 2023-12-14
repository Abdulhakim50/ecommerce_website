import React from 'react'
import SearchPage from './Search'
import getSearchResults from "@/actions/getSearchResuts";


const Search = async ({searchParams}) => {
  const query = searchParams?.query || '';
  const filter = searchParams?.params || '';


  console.log(query)
  const products = await getSearchResults(query,filter)

 if(!products){
  return <p>No products found </p>
 }
  return (
  <SearchPage products={products}/>
  )
}

export default Search