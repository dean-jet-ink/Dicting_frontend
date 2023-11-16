import Border from "@/components/border/border";
import UserImageForm from "@/features/user/components/UserImageForm";
import OtherLayout from "@/layouts/OtherLayout";
import { ReactElement } from "react";

const ImagePage = () => {
  return (
    <div className="w-full">
      <div className="w-full sm:w-80 text-center m-auto">
        <h1>Image</h1>
        <Border />
      </div>
      <div className="mt-8">
        <UserImageForm />
      </div>
    </div>
  );
};

ImagePage.getLayout = (page: ReactElement) => {
  return <OtherLayout>{page}</OtherLayout>;
};

export default ImagePage;