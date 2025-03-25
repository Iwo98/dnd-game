import { authOptions } from "@/src/auth";
import { UserRole } from "@/src/types/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  role: UserRole;
  children: React.ReactElement;
}

const AuthRequired = async ({ role, children }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");

    return null;
  }

  if (session && session.user.role === role) {
    return children;
  }
};

export default AuthRequired;
