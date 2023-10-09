import { Meta, StoryFn } from "@storybook/react";

import Modal, { ModalProps } from "./Modal";
import Button from "../button/Button";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
};

const Template: StoryFn<ModalProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={onClickOpen}>Open</Button>
      <Modal {...props} isOpen={isOpen} close={onClickClose} />
    </div>
  );
};

const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <div className="text-center mb-4">
        <h3 className="text-xl">Modal Test</h3>
      </div>
      <div className="flex justify-center gap-4">
        <Button type="button">OK</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
      </div>
    </div>
  ),
};

export { Default };
export default meta;
