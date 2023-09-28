import { Meta, StoryFn } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

const Template: StoryFn<HeaderProps> = (props) => {
  const dummyTexts: string[] = [];
  for (let i = 20; i >= 0; i--) {
    dummyTexts.push(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, et explicabo officia voluptates modi natus vero velit laudantium pariatur laborum quae sit sint odit eos unde porro, odio molestias ullam!"
    );
  }

  return (
    <div className="py-16 px-28">
      <Header {...props} />
      <div className="flex flex-col gap-8">
        {dummyTexts.map((dummy, index) => {
          return <p key={index}>{dummy}</p>;
        })}
      </div>
    </div>
  );
};

const BoardHeader = Template.bind({});
const BoardHeaderChild = () => {
  return <div>Board</div>;
};

BoardHeader.args = {
  children: <BoardHeaderChild />,
};

export default meta;
export { BoardHeader };
