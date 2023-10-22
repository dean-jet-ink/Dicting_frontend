import { Meta, StoryFn } from "@storybook/react";
import ProgressCircle, { ProgressCircleProps } from "./ProgressCircle";

const meta: Meta = {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
};

const Template: StoryFn<ProgressCircleProps> = (props) => (
  <ProgressCircle {...props} />
);

const Default = Template.bind({});
Default.args = {
  percent: 0.2,
  content: "60/300",
};

export default meta;
export { Default };
