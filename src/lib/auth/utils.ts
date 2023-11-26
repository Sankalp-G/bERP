import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";
import client from "../db/utils";
import { getUser } from "../db/actions";

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

export type AuthSession = {
  session: {
    user: User;
  } | null;
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        if (typeof user.id !== "number") throw new Error("id should a number");

        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;

        const user = getUser(email, password);

        return user;
      },
    })
  ],
};


export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session } as AuthSession;
};

export const checkAuth = async () => {
  const { session } = await getUserAuth();
  console.log(session)
  if (!session) redirect("/api/auth/signin");
};
