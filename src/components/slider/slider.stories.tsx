import { Meta, StoryFn } from "@storybook/react";
import Slider, { SliderProps } from "./Slider";
import apple from "../../../public/apple.jpg";
import Image from "next/image";

const meta: Meta = {
  title: "Components/Slider",
  component: Slider,
};

const Template: StoryFn<SliderProps> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Slider {...props} />
    </div>
  );
};

const Default = Template.bind({});
Default.args = {
  contents: [
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
    <Image src={apple} width={420} alt="" />,
  ],
};

export default meta;
export { Default };
