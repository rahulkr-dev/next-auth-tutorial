"use client"

import {useRouter} from "next/navigation"
type AuthLoginBtnProps = {
    children:React.ReactNode,
    mode?:"redirect" | "modal",
    asChild?:boolean
}


export default function AuthLoginButton({children, mode="redirect"}:AuthLoginBtnProps){
    const router = useRouter()
    const handleBtnClick  = ()=>{
        router.push("/auth/login")
    }

    if(mode === "modal"){
        return <span>Todo : Implement modal</span>
    }
    return (
        <span onClick={handleBtnClick} className="cursor-pointer">
            {children}
        </span>
    )

}