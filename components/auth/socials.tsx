import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa"


export const Socials = ()=>{
    return (
        <div className="w-full space-y-2">
            <Button variant={"outline"} className="w-full">
                <FcGoogle />
            </Button>
            <Button variant={"outline"} className="w-full">
                <FaGithub />
            </Button>
        </div>
    )
}