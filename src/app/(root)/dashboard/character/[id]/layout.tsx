import CharacterHeader from "@/src/components/shared/header/variants/character-header";

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

const CharacterLayout = async ({ children, params }: Props) => {
  const data = await params;
  const id = Number(data.id);

  return (
    <div>
      <CharacterHeader characterId={id} />
      <main className="flex-1 h-dvh">{children}</main>
    </div>
  );
};

export default CharacterLayout;
