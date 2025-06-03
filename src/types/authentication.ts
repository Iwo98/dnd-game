import { z } from "zod";

export const UserSchema = z.object({
  pk: z.number(),
  username: z.string(),
  email: z.string().nullable(),
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
}
