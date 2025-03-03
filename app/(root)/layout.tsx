// import Footer from "@/components/footer";
import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="flex-1 wrapper h-dvh">{children}</main>
      <Footer />
    </div>
  );
}
