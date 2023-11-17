import { Meta, StoryFn } from "@storybook/react";
import Slider, { SliderProps } from "./Slider";
import top from "../../../public/login.svg";
import Image from "next/image";
import { ReactNode } from "react";

const meta: Meta = {
  title: "Components/Slider",
  component: Slider,
};

const Template: StoryFn<SliderProps> = (props) => {
  let contents: ReactNode[] = [];

  for (let i = 0; i < 5; i++) {
    contents.push(<Image key={i} src={top} width={420} alt="" />);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Slider contents={contents} />
    </div>
  );
};

const Default = Template.bind({});

export default meta;
export { Default };
