import NotificationItem from "./NotificationItem";
import { useNotification } from "@/store/notification/notification";

const NotificationList = () => {
  const { notifications } = useNotification();

  return (
    <div className="fixed z-50 top-3 left-0 right-0">
      <div className="flex flex-col gap-3">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
