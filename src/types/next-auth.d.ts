import { UserRole } from "./user";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }

  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface User extends DefaultUser {
    role: UserRole;
  }
}
