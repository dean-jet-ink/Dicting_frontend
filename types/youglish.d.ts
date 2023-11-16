import { VideoWidget } from "@/features/english/types";

declare global {
  interface Window {
    YG:
      | {
          Widget: VideoWidget;
        }
      | undefined;
  }
}
