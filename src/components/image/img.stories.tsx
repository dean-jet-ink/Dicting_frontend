import { Meta, StoryFn } from "@storybook/react";

import Img, { ImgProps } from "./Img";
import noImg from "../../../public/noImage.png";

const meta: Meta = {
  title: "Components/Img",
  component: Img,
};

const Template: StoryFn<ImgProps> = (props) => (
  <Img {...props} defaultImg={noImg} className="w-32 h-24" />
);

const Default = Template.bind({});
Default.args = {
  img: "chrome://new-tab-page/icons/google_logo.svg"
};

const NoImg = Template.bind({});
NoImg.args = {
  img: ""
}

export default meta
export { Default, NoImg }