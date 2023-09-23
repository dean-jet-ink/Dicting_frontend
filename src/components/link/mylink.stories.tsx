import MyLink, { MyLinkProps } from "./MyLink";

import { Meta, StoryFn } from "@storybook/react";

const meta: Meta = {
  title: "Components/MyLink",
  component: MyLink,
};

const Template: StoryFn<MyLinkProps> = (props) => <MyLink {...props} />;

const Link = Template.bind({});
Link.args = {
  label: "link",
  href: "#",
};

export default meta;
export { Link };
