import { Meta, StoryFn } from "@storybook/react";
import TabMenu, { TabMenuProps } from "./TabMenu";

const meta: Meta = {
  title: "Components/TabMenu",
  component: TabMenu,
};

const Template: StoryFn<TabMenuProps> = (props) => <TabMenu {...props} />;

const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      overview: "Tab1",
      content: (
        <div className="p-4">
          <div className="flex flex-col gap-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur reprehenderit, ad nam impedit sed sint quod pariatur
              voluptatum! Voluptates aliquam pariatur consectetur, reiciendis
              doloribus iusto aliquid sit ipsum placeat rerum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur reprehenderit, ad nam impedit sed sint quod pariatur
              voluptatum! Voluptates aliquam pariatur consectetur, reiciendis
              doloribus iusto aliquid sit ipsum placeat rerum.
            </p>
          </div>
        </div>
      ),
    },
    {
      overview: "Tab2",
      content: (
        <div className="p-4">
          <h2 className="text-xl">This is Tab2's content</h2>
        </div>
      ),
    },
  ],
};

export default meta;
export { Default };
