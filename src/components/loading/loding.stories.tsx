import { Meta, StoryFn } from "@storybook/react";
import Loading, { LoadingProps } from "./Loading";

const meta: Meta<LoadingProps> = {
  title: "Components/Loading",
  component: Loading,
};

const Template: StoryFn<LoadingProps> = (props) => <Loading {...props} />;

const Small = Template.bind({});
Small.args = {
  variant: "sm",
};

const Mid = Template.bind({});
Mid.args = {
  variant: "mid",
};

export default meta;
export { Small, Mid };
