import { createStore, useStore } from "zustand";
import { v4 as uuid } from "uuid";

export type NotificationType = "info" | "warning" | "success" | "error";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
};

type NotificationStore = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const notificationStore = createStore<NotificationStore>((set, get) => ({
  notifications: [],
  showNotification: (notification) => {
    const id = uuid();

    set((state) => ({
      notifications: [...state.notifications, { id, ...notification }],
    }));

    if (notification.duration) {
      setTimeout(() => {
        get().dismissNotification(id);
      }, notification.duration);
    }
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  },
}));

const useNotification = () => useStore(notificationStore);

export { useNotification };
