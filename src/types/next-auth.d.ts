// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import type { AuthResponse, CustomSession } from "@/src/types/authentication";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context.
   * Session `user` should only contain immutable variables.
   */
  interface Session extends CustomSession {
    expires?: string;
  }

  interface User extends AuthResponse {
    id?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends AuthResponse {
    ref: number;
    expires: string;
  }
}
