import prisma from "@/libs/prisma";




const getOrderById =  async(params) => {
    try {
        const {order} =params
        const orders =await prisma.order.findUnique({
        where:{
            id:order
        }
        })

        if(!order) return null

        return orders
    } catch (error) {
        throw error
    }
  
}

export default getOrderById