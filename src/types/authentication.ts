import { z } from "zod";

const userRoleSchema = z.union([z.literal("player"), z.literal("dm")]);

export type UserRole = z.infer<typeof userRoleSchema>;

export const UserSchema = z.object({
  pk: z.number(),
  username: z.string(),
  email: z.string().nullable(),
  role: userRoleSchema,
});

export const AuthResponseSchema = z.object({
  access: z.string(),
  refresh: z.string(),
  user: UserSchema,
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

export interface CustomSession {
  access: string;
  username: string;
  role: UserRole;
}
