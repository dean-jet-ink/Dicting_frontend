import { Meta, StoryFn } from "@storybook/react";
import TextArea, { TextAreaProps } from "./TextArea";

const meta: Meta = {
  title: "Components/Textarea",
  component: TextArea,
};

const Template: StoryFn<TextAreaProps> = (props) => <TextArea {...props} />;

const Default = Template.bind({});

export default meta;
export { Default };
