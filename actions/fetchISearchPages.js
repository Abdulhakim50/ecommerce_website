import prisma from "@/libs/prisma";



export async function fetchSearchPages(query,filterMax,filterMin) {
    const ITEMS_PER_PAGE = 8;
  try {
    const count = await prisma.product.count({
      where: {

         OR: [ { name: {
                contains:query,
                mode: 'insensitive', // Case-insensitive search
              }},
             { price: {
                gte: filterMin ? parseFloat(filterMin) : undefined,
                lte: filterMax ? parseFloat(filterMax) : undefined,
              }},]
    
      },
    
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Prisma Error:', error);
    throw new Error(error);
  }
}