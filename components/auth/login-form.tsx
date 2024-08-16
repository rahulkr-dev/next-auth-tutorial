"use client"
import { useTransition,useState } from "react";
import { z } from "zod";
import { AuthCardWrapper } from "./auth-card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/login";

export const LoginForm = () => {
    const [isPending,startTransition] = useTransition()
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values:z.infer<typeof loginSchema>)=>{
    // console.log(values)
    setError("")
    setSuccess("")
    startTransition(()=>{
        login(values)
        .then((data)=>{
            if(data.error){
                setError(data.error)
            }
            if(data.message){
                setSuccess(data.message)
            }
        })
    })
  }
  return (
    <AuthCardWrapper
      headerTitle="Welcome back"
      backButtonTitle="don't have an account"
      backButtonHref="/auth/signup"
      socials={true}
    >
        <div className="w-[400px]">
       
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="rahul@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormError message={error} />
            <FormSuccess message={success} />
          <Button disabled={isPending} className="w-full" type="submit">Login</Button>
        </form>
      </Form>
           
      </div>
    </AuthCardWrapper>  
  );
};
