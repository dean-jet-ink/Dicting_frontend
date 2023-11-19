import { ReactElement } from "react";

import UserImageForm from "@/features/user/components/UserImageForm";
import OtherLayout from "@/layouts/OtherLayout";

const ImagePage = () => {
  return (
    <div className="w-full">
      <div className="w-full sm:w-80 text-center m-auto">
        <h1>Image</h1>
        <div className="w-full border-b border-gray-400 mt-2 mb-8"></div>
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
