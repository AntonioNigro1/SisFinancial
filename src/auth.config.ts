import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authenticateUser } from "./modules/core/auth/login/services/authenticate-user.service";
import { Credentials as CredentialsType } from "./modules/shared/types/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials): Promise<any> {
        const user = authenticateUser(credentials as CredentialsType);
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        token.accountType = user.accountType;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub as string,
        accountType: token.accountType as string,
        token: token.token as string,
      };
      return session;
    },
  },
};
