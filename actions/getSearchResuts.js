import prisma from "@/libs/prisma";



export default async function getSearchResults(query) {


   
    try {
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: query,
            mode: 'insensitive', // Case-insensitive search
          }},
          include:{
            reviews:true
        },
        },
      );

      return products;
    } catch (error) {
      console.error(error);
      
    }
  } 

