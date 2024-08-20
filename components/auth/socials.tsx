"use client"

import {signIn} from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa"
import { DEFAULT_LOGEDIN_URL } from "@/routes"


export const Socials = ()=>{

    const onClick = (provider:"google"|"github")=>{
        signIn(provider,{callbackUrl:DEFAULT_LOGEDIN_URL})
    }
    return (
        <div className="w-full flex gap-2 items-center">
            <Button onClick={()=>onClick("google")} variant={"outline"} className="w-full">
                <FcGoogle size={20} />
            </Button>
            <Button  onClick={()=>onClick("github")} variant={"outline"} className="w-full">
                <FaGithub size={20} />
            </Button>
        </div>
    )
}