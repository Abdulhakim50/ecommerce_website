
import prisma from "@/libs/prisma"


export default async function getMostViewed(params){
    try {
        const {catagory,searchTerm}=params
        let searchString =searchTerm

        if(!searchTerm){
            searchString=''
        }
        let query={}

        if(catagory){
            query.catagory=catagory
        }
    

        const totalCount = await prisma.product.count({
            where: {
              ...query,
              OR: [
                {
                  name: {
                    contains: searchString,
                    mode: 'insensitive',
                  },
                  description: {
                    contains: searchString,
                    mode: 'insensitive',
                  },
                },
              ],
            },
          });

          const randomOffset = Math.floor(Math.random() * totalCount);


             const products =await prisma.product.findMany({
                take: 6,
               skip: randomOffset,
                where:{
                    ...query,

                    OR:[
                        {
                            name:{
                                contains:searchString,
                                mode:'insensitive'
                            },
                           description:{
                                contains:searchString,
                                mode:'insensitive'
                            },

                        }
                    ]
                },
                include:{
                    reviews:{
                        include:{
                            user:true
                        },
                        orderBy:{
                            rating:'desc'
                        }
                    }
                }
             })
             return products

    } catch (error) {
        throw new Error(error)
        
    }
}