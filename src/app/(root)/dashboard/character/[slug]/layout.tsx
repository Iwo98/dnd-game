import CharacterHeader from "@/src/components/shared/header/variants/character-header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <CharacterHeader />
      <main className="flex-1 wrapper h-dvh">{children}</main>
    </div>
  );
};

export default DashboardLayout;
