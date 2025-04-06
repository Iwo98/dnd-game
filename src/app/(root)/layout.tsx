const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full flex-col bg-background">
      <main className="flex-1 h-dvh">{children}</main>
    </div>
  );
};

export default DashboardLayout;
