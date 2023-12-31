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
const totalPages = await fetchSearchPages(query,filterMax,filterMin,filterCat)
 



  return (<>
  <div>


  </div>
 <div>
<SearchPage products={products} totalPages={totalPages} query={query}/>
 </div>
   
  </>
  )
}

export default Search