import { Meta, StoryFn } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Switch",
  component: Switch,
};

const Template: StoryFn<SwitchProps> = (props) => {
  const [flag, setFlag] = useState(false);

  const toggleSwitch = (checked: boolean) => {
    setFlag(checked);
  };

  return <Switch id="switch" flag={flag} toggleFlag={toggleSwitch} />;
};

const Default = Template.bind({});

export default meta;
export { Default };
