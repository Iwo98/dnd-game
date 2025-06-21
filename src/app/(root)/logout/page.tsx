"use client";

import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import Loader from "@/src/components/shared/loader";

const LogoutPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/", redirect: true });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  );
};

export default LogoutPage;
