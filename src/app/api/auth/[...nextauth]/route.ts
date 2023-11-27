import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth/utils";

declare module "next-auth/jwt" {
  interface JWT {
    id: number
    email: string
    role: string
  }
}

export type User = {
  id: number;
  email: string;
  role: string;
};
declare module "next-auth" {
  interface Session {
    user: {
      id: number
      email: string
      role: string
    }
  }

  interface User {
    id: number
    email: string
    role: string
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
