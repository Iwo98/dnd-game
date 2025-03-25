import { NextResponse } from "next/server";
import { addUser, findUser } from "@/src/app/api/users";

export async function POST(req: Request) {
  const data = await req.json();

  const { username, email, password } = data;

  if (!username || !password || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (findUser(email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  addUser({ email, password, username, role: "player" });

  return NextResponse.json("", { status: 201 });
}
