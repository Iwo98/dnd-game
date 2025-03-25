// import Footer from "@/src/components/footer";

import Header from "@/src/components/shared/header";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div>
    <Header session={null} hasSesssionButtons={false} />
    <main className="flex-1 wrapper h-dvh">{children}</main>
    {/* <Footer /> */}
  </div>
);

export default AuthLayout;
