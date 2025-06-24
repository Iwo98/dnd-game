// import Footer from "@/components/footer";

import Header from "@/src/components/shared/header/variants/header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/auth";
import AuthRequired from "@/src/components/shared/auth-required";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);

  return (
    <AuthRequired role="player">
      <div>
        <Header session={session} hasSesssionButtons />
        <main className="flex-1 wrapper h-dvh">{children}</main>
      </div>
    </AuthRequired>
  );
};

export default DashboardLayout;
