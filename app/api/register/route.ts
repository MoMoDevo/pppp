import prismadb from "@/app/lib/prismaDb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req:Request){

    try {
        const reQbody=await req.json()
        const {password,name,email}=reQbody
        const hashedPassword=await bcrypt.hash(password,8)
        const user=await prismadb.user.create({
            data:{
                hashedPassword,
                name,
                email,
                



            }
        })
        return NextResponse.json("registration succecful!",{status:201})
        
    } catch (error) {
        return NextResponse.json("failed try again later",{status:501})

        
    }
}