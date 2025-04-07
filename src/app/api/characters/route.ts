import { NextResponse } from "next/server";
import { getCharacters } from "../characters";

export async function GET() {
  const characters = getCharacters();

  return NextResponse.json(characters, { status: 200 });
}
