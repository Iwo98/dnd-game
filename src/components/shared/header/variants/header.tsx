import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/src/lib/constants";
import Menu from "../components/menu";
import { CustomSession } from "@/src/types/user";

interface Props {
  hasSesssionButtons: boolean;
  session: CustomSession | null;
  logoRedirect?: string;
}

const Header = ({
  hasSesssionButtons,
  session,
  logoRedirect = "/dashboard",
}: Props) => {
  return (
    <header className="w-full border-b">
      <div className="p-2 lg:p-4 flex-between">
        <div className="flex-start">
          <Link href={logoRedirect} className="flex-start">
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
        <Menu session={session} hasSesssionButtons={hasSesssionButtons} />
      </div>
    </header>
  );
};

export default Header;
