"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { signupSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const signup = async (values: z.infer<typeof signupSchema>) => {
  const validationResult = signupSchema.safeParse(values);

  if (!validationResult.success) {
    return { error: "Something went wrong" };
  }

  const { email, password, name } = validationResult.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const isEmailExits = await getUserByEmail(email);
  if (isEmailExits) {
    return { error: "Email already exists" };
  }
  // create user
  await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  return {
    message: "User created",
  };
};
