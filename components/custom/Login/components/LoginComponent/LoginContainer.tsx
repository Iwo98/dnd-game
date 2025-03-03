"use client";

import { useSearchParams } from "next/navigation";
import Login from "./Login";
import { UserRole } from "@/types/user";

const LoginContainer = () => {
  const searchParams = useSearchParams();
  const role = (searchParams.get("role") || "player") as UserRole;

  return <Login role={role} />;
};

export default LoginContainer;
