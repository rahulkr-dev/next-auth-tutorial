import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "@/auth.config";

import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "./data/user";

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      if (session.user && token.sub) {
        const user = await getUserById(token.sub);
        if (user && user.role) {
          session.user.role = user.role;
        }
      }

      return session;
    },
    async jwt({ token }) {
      console.log("jwt", { token });
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
