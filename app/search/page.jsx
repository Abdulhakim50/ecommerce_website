import React from 'react'
import SearchPage from './Search'
import getSearchResults from "@/actions/getSearchResuts";
import Pagination from "./Pagination";
import { fetchSearchPages } from '@/actions/fetchISearchPages';
import FilterCategory from '@/components/FilterCategory';



const Search = async ({searchParams}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 const filterMin=searchParams?.filterMin|| ''; 
 const filterMax=searchParams?.filterMax|| ''; 
 const filterCat=searchParams?.catFilter|| ''; 

 
const products =await getSearchResults(query,currentPage,filterMax,filterMin,filterCat)
const totalPages = await fetchSearchPages(query,filterMax,filterMin)
 


 if(!products){
  return <p>No products found </p>
 }
  return (<>
  <div>

  <SearchPage products={products} totalPages={totalPages}/>
  </div>
 <div>

 </div>
   
  </>
  )
}

export default Search