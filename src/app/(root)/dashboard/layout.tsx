// import Footer from "@/components/footer";

import AuthRequired from "@/src/components/shared/auth-required";
import Header from "@/src/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthRequired role="player">
      <div className="flex h-full flex-col">
        <Header hasSesssionButtons />
        <main className="flex-1 wrapper h-dvh">{children}</main>
      </div>
    </AuthRequired>
  );
}
