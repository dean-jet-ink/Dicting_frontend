import NotificationItem from "./NotificationItem";
import { useNotification } from "@/store/notification/notification";

const NotificationList = () => {
  const { notifications } = useNotification();

  return (
    <div className="fixed z-50 top-6 right-0 left-0 w-102 m-auto">
      <div className="flex flex-col gap-3">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
