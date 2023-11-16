import { Meta, StoryFn } from "@storybook/react";

import File, { FileProps } from "./File";
import { useRef } from "react";

const meta: Meta = {
  title: "Components/File",
  component: File,
};

const Template: StoryFn<FileProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  return <File {...props} ref={ref} />;
};

const Default = Template.bind({});

export default meta;
export { Default };
