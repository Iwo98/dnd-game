const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full flex-col bg-slate-950">
      <main className="flex-1 wrapper h-dvh">{children}</main>
    </div>
  );
};

export default DashboardLayout;
