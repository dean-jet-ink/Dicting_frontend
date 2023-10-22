import { Meta, StoryFn } from "@storybook/react";
import Popup, { PopupProps } from "./Popup";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Popup",
  component: Popup,
};

const Template: StoryFn<PopupProps> = ({ content }) => {
  const [isHover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <div
        className="bg-accent w-40 h-28"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        Popup
      </div>
      <Popup content={content} isHover={isHover} />
    </div>
  );
};

const Default = Template.bind({});
Default.args = {
  content: "Popup",
};

export default meta;
export { Default };
