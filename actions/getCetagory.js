import prisma from '@/libs/prisma'

export async function getProductByCategory(category) {
  
    try {
      const products = await prisma.product.findMany({
        where: {
          catagory:category,
        },
    
            include:{
                reviews:true
            },
          });
        
          return products
    } catch (error) {
        throw new Error(error)
    }

}
