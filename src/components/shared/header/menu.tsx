import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, UserIcon } from "lucide-react";
import { Button } from "../../ui/button";
import LogoutButton from "../../shared/header/logout-button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/src/components/ui/sheet";
import { authOptions } from "@/src/auth";
import { getServerSession } from "next-auth";

const Menu = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild>
          <Link href="/login">
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription />
            {session?.user.username ? (
              <div className="flex align-middle">
                <UserIcon height={20} />
                <span>{session.user.username}</span>
              </div>
            ) : (
              <Button asChild>
                <Link href="/login">
                  <UserIcon />
                  Sign In
                </Link>
              </Button>
            )}
            <LogoutButton session={session} />
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
