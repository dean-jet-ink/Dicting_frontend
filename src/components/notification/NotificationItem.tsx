import { useEffect } from "react";
import {
  Notification,
  notificationStore,
  useNotification,
} from "../../store/notification/notification";

const NotificationItem = ({
  id,
  type,
  title,
  message,
}: Omit<Notification, "duration">) => {
  let bgColor = "";
  switch (type) {
    case "info":
      bgColor = "bg-sky-700";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      break;
    case "success":
      bgColor = "bg-lime-600";
      break;
    case "error":
      bgColor = "bg-rose-600";
      break;
  }

  const { dismissNotification } = useNotification();

  const dismiss = () => {
    dismissNotification(id);
  };

  return (
    <div
      id={id}
      className={`${bgColor} py-2 px-5 m-auto w-96  text-white rounded-md transition-all duration-300 animate-slide-in-top`}
      onClick={dismiss}
    >
      <h4 className="mb-1 font-bold">{title}</h4>
      <p>{message}</p>
    </div>
  );
};

export default NotificationItem;
