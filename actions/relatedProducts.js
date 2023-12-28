import prisma from "@/libs/prisma";



export async function fetchRelatedProducts(params) {
    const {productId}=params;
  try {

    const product = await prisma.product.findUnique({
        where: { id: productId },
      });
    
      if (!product) {
        return [];
      }
    
    const relatedProducts = await prisma.product.findMany({
      take: 7,
      where: {
        category: product.category, // Adjust the criteria based on your needs
        id: { not: product.id }, // Exclude the current product
      },
      include: {
        reviews: true,
      },
    });

  
    return relatedProducts;
  } catch (error) {
    console.error('Prisma Error:', error);
    throw new Error(error);
  }
}