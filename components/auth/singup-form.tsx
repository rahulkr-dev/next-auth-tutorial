"use client"
import { useTransition,useState } from "react";
import { z } from "zod";
import { AuthCardWrapper } from "./auth-card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas";
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

export const SignupForm = () => {
    const [isPending,startTransition] = useTransition()
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name:""
    },
  });

  const onSubmit = (values:z.infer<typeof signupSchema>)=>{
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
      headerTitle="Create an account"
      backButtonTitle="have an account"
      backButtonHref="/auth/login"
      socials={true}
    >
        <div className="w-[400px]">
       
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input  placeholder="Raju Srri" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button disabled={isPending} className="w-full" type="submit">Signup</Button>
        </form>
      </Form>
           
      </div>
    </AuthCardWrapper>  
  );
};
