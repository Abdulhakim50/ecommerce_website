import prisma from "@/libs/prisma";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    const currentUser=await getCurrentUser();


    if(!currentUser ) return NextResponse.error()

    if( currentUser.role !=='ADMIN'){
        return NextResponse.error()
    }
   
 const product =await prisma?.product.delete({
    where:{id:params.id},
 });

 return NextResponse.json(product)
}