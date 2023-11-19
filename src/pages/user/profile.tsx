import { ReactElement } from "react";
import OtherLayout from "../../layouts/OtherLayout";
import UserForm from "@/features/user/components/UserForm";

const ProfilePage = () => {
  return (
    <div className="w-full">
      <div className="w-full sm:w-80 text-center m-auto">
        <h1>Profile</h1>
        <div className="w-full border-b border-gray-400 mt-2 mb-8"></div>
      </div>
      <div className="mt-24">
        <UserForm />
      </div>
    </div>
  );
};

ProfilePage.getLayout = (page: ReactElement) => {
  return <OtherLayout>{page}</OtherLayout>;
};

export default ProfilePage;
