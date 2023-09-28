import BaseLayout from "@/layouts/BaseLayout";
import { ReactElement } from "react";

const BoardPage = () => {
  return (
    <div>
      <h1>Board</h1>
    </div>
  );
};

BoardPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default BoardPage;
