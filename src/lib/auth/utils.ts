import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";


declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

export type AuthSession = {
  session: {
    user: {
      id: string;
      email?: string;
      role?: string;
    };
  } | null;
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [

  ],
};


export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session } as AuthSession;
};

export const checkAuth = async () => {
  const { session } = await getUserAuth();
  if (!session) redirect("/api/auth/signin");
};
