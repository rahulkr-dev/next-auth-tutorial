"use server"
import * as z from "zod"
import {loginSchema} from "@/schemas"

export const login = async (values:z.infer<typeof loginSchema>)=>{
    const validationResult = loginSchema.safeParse(values)

 
    if(!validationResult.success){
        return {error:"Something went wrong"}
    }

    return {
        message:"Email Sent"
    }
}