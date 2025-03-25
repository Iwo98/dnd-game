import AuthRequired from "@/src/components/shared/auth-required";

const DashboardPage = () => {
  return (
    <AuthRequired role="player">
      <div>Dashboard Page</div>
    </AuthRequired>
  );
};

export default DashboardPage;
