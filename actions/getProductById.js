import prisma from '@/libs/prisma';
import React from 'react'

const getProductById =async (params) => {


    try {
        const {productId}=params;

        const product= await prisma.product.findUnique({
            where:{
                id:productId
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

        if(!product){
            return null;
        }
        return product
        
    } catch (error) {
       throw new Error(error) 
    }
}

export default getProductById