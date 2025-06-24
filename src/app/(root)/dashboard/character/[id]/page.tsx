import Character from "./character";

interface Props {
  params: Promise<{ id: string }>;
}

const CharacterPage = async ({ params }: Props) => {
  const data = await params;
  const id = Number(data.id);

  return <Character characterId={id} />;
};

export default CharacterPage;
