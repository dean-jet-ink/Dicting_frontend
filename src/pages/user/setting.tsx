import { ReactElement } from "react";
import OtherLayout from "../../layouts/OtherLayout";

const SettingPage = () => {
  return <div></div>;
};

SettingPage.getLayout = (page: ReactElement) => {
  return <OtherLayout>{page}</OtherLayout>;
};

export default SettingPage;
