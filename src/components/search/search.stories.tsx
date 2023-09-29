import { Meta, StoryFn } from "@storybook/react";

import Search, { SearchProps } from "./Search";
import { useRef } from "react";

const meta: Meta = {
  title: "Components/Search",
  component: Search,
};

const Template: StoryFn<SearchProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <Search {...props} ref={inputRef} />;
};

const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
  type: "text",
};

export default meta;
export { Default };
