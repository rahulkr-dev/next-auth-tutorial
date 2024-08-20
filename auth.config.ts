import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/schemas/index";
import { getUserByEmail } from "@/data/user";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credential) {
        const validationResult = loginSchema.safeParse(credential);
        if (validationResult.success) {
          const { email, password } = validationResult.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const matchedPassword = await bcrypt.compare(password, user.password);
          if (!matchedPassword) {
            return null;
          }
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
