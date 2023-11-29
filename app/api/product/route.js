import prisma from "@/libs/prisma";
 import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";



export async function POST(request){
    const currentUser=await getCurrentUser();
    if(!currentUser ) return NextResponse.error()

    if( currentUser.role !== 'ADMIN'){
        return NextResponse.error()
    }

    const body =await request.json();
    const {name,description ,price,brand,catagory,inStock,images}=body;

    const product=await prisma.product.create({
        data:{
            name,description,brand,catagory,inStock,images, price:parseFloat(price)
        },
    });
    return NextResponse.json(product)

}

export async function PUT(request){
    const currentUser=await getCurrentUser();

    if(!currentUser ||  currentUser.role ==='ADMIN'){
        return NextResponse.error()
    }
    const body=await request.json();
    const{id,inStock}=body
 const product =await prisma.product.update({
    where:{id:id},
    data:{inStock}
 });

 return NextResponse.json(product)
}


