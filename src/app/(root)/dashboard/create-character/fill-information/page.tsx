import AuthRequired from "@/src/components/shared/auth-required";

const FillInformationPage = () => {
  return (
    <AuthRequired role="player">
      <div>Dashboard Page</div>
    </AuthRequired>
  );
};

export default FillInformationPage;
