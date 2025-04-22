import { NextResponse } from "next/server";
import { getCharacterById } from "../../characters";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const character = getCharacterById(id);

  if (!character) {
    return NextResponse.json({ error: "No such character" }, { status: 400 });
  }

  return NextResponse.json(character, { status: 200 });
}
