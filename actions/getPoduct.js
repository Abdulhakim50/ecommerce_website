
import prisma from "@/libs/prisma"


export default async function getProduct(params){
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

             const products =await prisma.product.findMany({
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
                            createdDate:'desc'
                        }
                    }
                }
             })
             return products

    } catch (error) {
        throw new Error(error)
        
    }
}