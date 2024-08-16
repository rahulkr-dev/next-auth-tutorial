import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password:z.string().min(1,{message:"Password is required"})
})

export const signupSchema = z.object({
    email: z.string().email(),
    password:z.string().min(1,{message:"Password is required"}),
    name:z.string().min(1,{message:"Name is required"})
})

