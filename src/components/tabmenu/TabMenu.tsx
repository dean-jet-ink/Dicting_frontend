import { ReactNode, useState } from "react";

type Tab = {
  overview: string;
  content: ReactNode;
};

export type TabMenuProps = {
  tabs: Tab[];
};

const TabMenu = ({ tabs }: TabMenuProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabStyle = "border-b cursor-pointer py-2 px-4";
  const unselectedTabStyle = `${tabStyle} border-transparent text-gray-400`;
  const selectedTabStyle = `${tabStyle} border-accent text-accent`;

  const [content, setContent] = useState<ReactNode>(tabs[0].content);

  const selectTab = (index: number) => {
    setSelectedTab(index);
    setContent(tabs[index].content);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center gap-8 mb-8">
        {tabs.map(({ overview }, index) => {
          return (
            <div
              key={overview}
              className={
                selectedTab === index ? selectedTabStyle : unselectedTabStyle
              }
              onClick={() => selectTab(index)}
            >
              {overview}
            </div>
          );
        })}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default TabMenu;
