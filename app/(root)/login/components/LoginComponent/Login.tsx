import { UserRole } from "@/types/user";

interface Props {
  role: UserRole;
}

const Login = ({ role }: Props) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-4xl text-center">Who are you?</h1>
      <div className="flex flex-col justify-center gap-4 mt-4">{role}</div>
    </div>
  );
};

export default Login;
