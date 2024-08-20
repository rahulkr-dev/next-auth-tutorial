"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGEDIN_URL } from "@/routes";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validationResult = loginSchema.safeParse(values);

  if (!validationResult.success) {
    return { error: "Something went wrong" };
  }
  const { email, password } = validationResult.data;
  try {
    await signIn("credentials", { email, password, redirectTo: DEFAULT_LOGEDIN_URL });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw err;
  }
};
