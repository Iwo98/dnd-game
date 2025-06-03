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
import { CustomSession } from "@/src/types/authentication";

interface Props {
  hasSesssionButtons: boolean;
  session: CustomSession | null;
}

const Menu = async ({ hasSesssionButtons, session }: Props) => {
  const sessionButtons = (
    <>
      {session?.username ? (
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="flex align-middle gap-1">
            <UserIcon height={20} />
            <span>{session.username}</span>
          </div>
          <LogoutButton session={session} />
        </div>
      ) : (
        <>
          <Button asChild>
            <Link href="/login">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </>
      )}
    </>
  );

  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <ModeToggle />
        {hasSesssionButtons && sessionButtons}
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription />
            {hasSesssionButtons && sessionButtons}
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
