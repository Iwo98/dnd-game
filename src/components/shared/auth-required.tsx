import { authOptions } from "@/src/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  role?: "player" | "dm";
  children: React.ReactElement;
}

const AuthRequired = async ({ role = "player", children }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");

    return null;
  }

  if (session && "player" === role) {
    return children;
  }
};

export default AuthRequired;
