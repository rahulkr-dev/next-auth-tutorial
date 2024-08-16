"use server"
import * as z from "zod"
import {signupSchema} from "@/schemas"

export const signup = async (values:z.infer<typeof signupSchema>)=>{
    const validationResult = signupSchema.safeParse(values)

 
    if(!validationResult.success){
        return {error:"Something went wrong"}
    }

    return {
        message:"created account successfully"
    }
}