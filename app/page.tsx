import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import AuthLoginButton from "@/components/auth/login-button";
const font = Poppins({
  subsets:["latin"],
  weight:["400","600"]
})

export default function Home() {
  return (
  <main className={cn("bg-slate-400 h-screen flex flex-col justify-center items-center space-y-3",font.className)}>
    <h1 className="text-5xl">Auth.js</h1>
    <p>A simple Authentication Service</p>
    <AuthLoginButton>
    <Button size={"lg"} variant={"secondary"}>Get Started</Button>
    </AuthLoginButton>
  </main>
  );
}
