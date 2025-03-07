import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild>
          <Link href="/sign-in">
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
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon />
                Sign In
              </Link>
            </Button>
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
