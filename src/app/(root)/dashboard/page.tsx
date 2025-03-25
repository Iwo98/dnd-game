import AuthRequired from "@/src/components/shared/auth-required";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <AuthRequired role="player">
      <Button size="lg" variant="default" asChild>
        <Link href="dashboard/create-character/pick-class">
          Create a character
        </Link>
      </Button>
    </AuthRequired>
  );
};

export default DashboardPage;
