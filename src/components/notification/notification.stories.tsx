import { Meta, StoryFn } from "@storybook/react";

import NotificationList from "./NotificationList";
import { useNotification } from "@/store/notification/notification";
import Button from "../button/Button";

const meta: Meta = {
  title: "Components/Notification",
  component: NotificationList,
};

const Template: StoryFn = () => {
  const { showNotification } = useNotification();

  return (
    <>
      <NotificationList />
      <div className="flex flex-col items-center gap-3">
        <Button
          variant="secondary"
          onClick={() => {
            showNotification({
              type: "info",
              title: "Info",
              message: "This is an info message",
              duration: 5000,
            });
          }}
        >
          info
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            showNotification({
              type: "warning",
              title: "Warning",
              message: "This is a warning message",
              duration: 3000,
            });
          }}
        >
          warning
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            showNotification({
              type: "success",
              title: "Success",
              message: "This is a success message",
              duration: 3000,
            });
          }}
        >
          success
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            showNotification({
              type: "error",
              title: "Error",
              message: "This is an error message",
              duration: 3000,
            });
          }}
        >
          error
        </Button>
      </div>
    </>
  );
};

const Default = Template.bind({});

export default meta;
export { Default };
