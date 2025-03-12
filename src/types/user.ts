export type UserRole = "dm" | "player";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
}
