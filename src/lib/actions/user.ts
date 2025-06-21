import api from "../axios";
import {
  LogInResponse,
  LogInPayload,
  RegisterPayload,
  RegisterResponse,
  RefreshTokenPayload,
  RefreshTokenResponse,
} from "@/src/types/user";

export const refreshToken = async (payload: RefreshTokenPayload) => {
  const response = await api.post<RefreshTokenResponse>(
    "api/auth/token/refresh/",
    payload,
  );

  return response.data;
};

export const logIn = async (payload: LogInPayload) => {
  const response = await api.post<LogInResponse>("api/auth/login/", payload);
  return response.data;
};

export const register = async ({
  email,
  password1,
  password2,
  username,
  role = "player",
}: RegisterPayload) =>
  api.post<RegisterResponse>("api/auth/register/", {
    email,
    password1,
    password2,
    username,
    role,
  });
