// import Footer from "@/src/components/footer";

import { authOptions } from "@/src/auth";
import Header from "@/src/components/shared/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Header session={null} hasSesssionButtons={false} logoRedirect="/" />
      <main className="flex-1 wrapper h-dvh">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default AuthLayout;
