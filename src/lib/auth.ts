import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { compare, hash } from 'bcrypt'
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "process.env.AUTH_SECRET",
  providers: [
    CredentialsProvider({
      // name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const teste = await hash('lucas', 12)
        console.log(teste);
        
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });
        return user;
      },
    }),
  ],
};
