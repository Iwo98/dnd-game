import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  EllipsisVertical,
  SwordsIcon,
  BrainIcon,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/src/components/ui/sheet";
import { CustomSession } from "@/src/types/user";
import LogoutButton from "./logout-button";
import { Button } from "@/src/components/ui/button";

interface Props {
  hasSesssionButtons: boolean;
  session: CustomSession | null;
}

const Menu = ({ hasSesssionButtons, session }: Props) => {
  const sessionButtons = (
    <>
      {session?.username ? (
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-1">
            {session.role === "player" ? (
              <SwordsIcon height={20} width={20} />
            ) : (
              <BrainIcon height={24} width={20} />
            )}
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
