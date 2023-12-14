import prisma from '@/libs/prisma'

export async function getProductByCategory(catagory) {
    try {
      const products = await prisma.product.findMany({
        where: {
          catagory: catagory,
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
