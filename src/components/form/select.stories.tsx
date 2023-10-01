import { Meta, StoryFn } from "@storybook/react";

import Select, { Option, SelectProps } from "./Select";
import { useRef } from "react";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
};

const Template: StoryFn<SelectProps> = (props) => {
  const ref = useRef<HTMLSelectElement>(null);
  return <Select {...props} ref={ref} />;
};

const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: "one",
      value: 1,
      selected: true,
    },
    {
      label: "two",
      value: 2,
      selected: false,
    },
    {
      label: "three",
      value: 3,
      selected: false,
    },
    {
      label: "four",
      value: 4,
      selected: false,
    },
    {
      label: "five",
      value: 5,
      selected: false,
    },
  ],
};

export default meta;
export { Default };
