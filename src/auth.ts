import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthResponse, AuthResponseSchema } from "./types/authentication";
import api from "./lib/axios";

// These two values should be a bit less than actual token lifetimes
const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60; // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60; // 6 days

const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000);
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // The data returned from this function is passed forward as the
      // `user` variable to the signIn() and jwt() callback
      async authorize(credentials) {
        try {
          const response = await api.post("auth/login/", credentials);
          const parsedResponse = AuthResponseSchema.safeParse(response.data);

          if (!parsedResponse.success) {
            console.log("Error", parsedResponse.error);
            throw new Error("Invalid auth response");
          }

          const authData: AuthResponse = parsedResponse.data;

          return authData;
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token, account }) {
      // If `user` and `account` are set that means it is a login event
      if (user && account) {
        token.user = user.user;
        token.access = user.access;
        token.refresh = user.refresh;
        token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;

        return token;
      }
      // Refresh the backend token if necessary
      if (getCurrentEpochTime() > token.ref) {
        try {
          const response = await api.post("auth/token/refresh/", {
            refresh: token.refresh,
          });

          const { access, refresh } = response.data;

          token.access = access;
          token.refresh = refresh;
          token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
        } catch (error) {
          console.error("Error refreshing token:", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
      return token;
    },

    // Since we're using Django as the backend we have to pass the JWT
    // token to the client instead of the `session`.
    async session({ token }) {
      return {
        username: token.user.username,
        role: token.user.role,
        expires: token.expires,
        access: token.access,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies AuthOptions;

export default NextAuth(authOptions);
