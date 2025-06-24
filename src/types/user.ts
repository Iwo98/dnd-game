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

export interface Credentials {
  username: string;
  password: string;
}

export type LogInPayload = Credentials | undefined;

export type LogInResponse = AuthResponse;

export interface RegisterPayload {
  email: string;
  password1: string;
  password2: string;
  username: string;
  role?: UserRole;
}

export type RegisterResponse = AuthResponse;

export interface RefreshTokenPayload {
  refresh: string;
}

export interface RefreshTokenResponse {
  refresh: string;
  access: string;
}

export interface CustomSession {
  access: string;
  username: string;
  role: UserRole;
}
