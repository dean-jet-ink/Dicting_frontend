import { useRef } from "react";
import { Meta, StoryFn } from "@storybook/react";

import Input, { InputProps } from "./Input";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
};

const Template: StoryFn<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <Input {...props} ref={inputRef} />;
};

const Default = Template.bind({});
Default.args = {
  placeholder: "Input text...",
  type: "text",
};

const WithErr = Template.bind({});
WithErr.args = {
  placeholder: "Error occurred",
  type: "text",
  error: {type: "", message: "この項目は必須です"}
};

export default meta;
export { Default, WithErr };
