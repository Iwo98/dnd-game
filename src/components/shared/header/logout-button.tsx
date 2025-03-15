"use client";

import { Session } from "next-auth";
import { Button } from "../../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  session: Session | null;
}

const LogoutButton = ({ session }: Props) => {
  const router = useRouter();

  const onClick = () => {
    signOut();
    router.replace("/login");
  };

  if (!session) {
    return null;
  }

  return (
    <Button variant="default" onClick={onClick}>
      Log out
    </Button>
  );
};

export default LogoutButton;
