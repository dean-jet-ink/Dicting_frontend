import { ReactElement } from "react";

import BaseLayout from "@/layouts/BaseLayout";
import CardList from "@/features/english/components/card-list/CardList";

const TopPage = () => {
  return <CardList />;
};

TopPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default TopPage;
