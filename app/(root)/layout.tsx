export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col">
      {/* <Header /> */}
      <main className="flex-1 wrapper h-dvh">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
