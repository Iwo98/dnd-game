import PickClass from "@/src/components/custom/pick-class/pick-class";
import AuthRequired from "@/src/components/shared/auth-required";

const PickClassPage = () => {
  return (
    <AuthRequired role="player">
      <>
        <h1 className="text-3xl font-bold text-center mb-4">Pick a class</h1>
        <PickClass />
      </>
    </AuthRequired>
  );
};

export default PickClassPage;
