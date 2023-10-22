import { Meta, StoryFn } from "@storybook/react";
import SideMenu, { SideMenuProps } from "./SideMenu";
import Button from "../button/Button";
import { useState } from "react";

const meta: Meta = {
  title: "Components/SideMenu",
  component: SideMenu,
};

const Template: StoryFn<SideMenuProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={toggleMenu}>open</Button>
      <SideMenu isOpen={isOpen} close={closeMenu}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatibus commodi. Sunt a quos adipisci alias, illum nam doloremque
          delectus voluptates fugiat excepturi ratione harum eius nulla, atque
          cumque officia?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatibus commodi. Sunt a quos adipisci alias, illum nam doloremque
          delectus voluptates fugiat excepturi ratione harum eius nulla, atque
          cumque officia?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatibus commodi. Sunt a quos adipisci alias, illum nam doloremque
          delectus voluptates fugiat excepturi ratione harum eius nulla, atque
          cumque officia?
        </div>
      </SideMenu>
    </div>
  );
};

const Default = Template.bind({});

export default meta;
export { Default };
