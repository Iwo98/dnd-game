"use client";

import { useSearchParams } from "next/navigation";
import { UserRole } from "@/src/types/user";
import Login from "./login";

const LoginContainer = () => {
  const searchParams = useSearchParams();
  const role = (searchParams.get("role") || "player") as UserRole;

  return <Login role={role} />;
};

export default LoginContainer;
