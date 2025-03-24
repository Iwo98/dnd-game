"use client";

import { Session } from "next-auth";
import { Button } from "../../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

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
    <Button size="default" variant="destructive" onClick={onClick}>
      <LogOutIcon size={20} />
    </Button>
  );
};

export default LogoutButton;
