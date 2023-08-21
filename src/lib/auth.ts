import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  secret: "process.env.AUTH_SECRET",
  providers: [
    CredentialsProvider({
      // name: "Sign in",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        console.log(credentials);
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        
        if (!user) {
          return null;
        }
        const isValid = compare(credentials.password, user.password);
        console.log(isValid);
        
        if (!isValid) {
          throw new Error("Wrong credentials. Try again.");
        }

        return user;
      },
    }),
  ],
};
