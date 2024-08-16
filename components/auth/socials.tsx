import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa"


export const Socials = ()=>{
    return (
        <div className="w-full flex gap-2 items-center">
            <Button variant={"outline"} className="w-full">
                <FcGoogle size={20} />
            </Button>
            <Button  variant={"outline"} className="w-full">
                <FaGithub size={20} />
            </Button>
        </div>
    )
}