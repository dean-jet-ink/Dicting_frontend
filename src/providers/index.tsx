import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/react_query";
import NotificationList from "@/components/notification/NotificationList";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <NotificationList />

      {/* notificationを最前面にひょうじするため、ページコンテントにrelative、z-index: 0を指定 */}
      <div className="relative z-0">{children}</div>
    </QueryClientProvider>
  );
};

export default AppProvider;
