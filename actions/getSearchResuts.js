import prisma from "@/libs/prisma";



export default async function getSearchResults(query,currentPage,filterMin,filterMax,filterCat) {
  const ITEMS_PER_PAGE =8;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

 
  try {
    const products = await prisma.product.findMany({
      where: {
      
        name: {
          contains:query,
          mode: 'insensitive', // Case-insensitive search
         },
         price: {
          gte: filterMin ? parseFloat(filterMin) : undefined,
          lte: filterMax ? parseFloat(filterMax) : undefined,
        },
       
        
        },
      
      include: {
        reviews: true,
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  } 
}


