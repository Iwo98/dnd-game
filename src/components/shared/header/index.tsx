import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/src/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="p-2 lg:p-4 flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              className="rounded-md"
              priority={true}
              src="/images/logo.png"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
