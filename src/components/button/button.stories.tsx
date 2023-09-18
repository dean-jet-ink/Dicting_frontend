import { Meta, StoryFn } from "@storybook/react";
import { SendHorizontal } from "lucide-react";

import Button, { ButtonProps } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (props) => <Button {...props} />;

const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};

const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Button",
};

const WithIcon = Template.bind({});

WithIcon.args = {
  children: "Button",
  icon: <SendHorizontal />,
};

export default meta;
export { Primary, Secondary, WithIcon };
