import { useEffect } from "react";
import {
  CaptionConsumedEvent,
  FetchDoneEvent,
  VideoChangeEvent,
  VideoWidget,
} from "../../types";
import { useNotification } from "@/store/notification/notification";

type EnglishVideoProps = {
  content: string;
};

const EnglishVideo = ({ content }: EnglishVideoProps) => {
  const { showNotification } = useNotification();

  useEffect(() => {
    let youglish: HTMLScriptElement | null = null;
    let s: HTMLScriptElement | null = null;

    // 通信中にコンポーネントがアンマウントされた場合、通信をキャンセルするため
    // setTimeoutにて制御
    const timer = setTimeout(() => {
      youglish = document.createElement("script");
      youglish.async = true;
      youglish.src = "https://youglish.com/public/emb/widget.js";
      s = document.getElementsByTagName("script")[0];
      s.parentNode?.insertBefore(youglish, s);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (youglish && s) {
        s.parentNode?.removeChild(youglish);
      }
      window.YG = undefined;
    };
  }, []);

  const widgetId = "yg-widget";

  let widget: VideoWidget;

  const onYouglishAPIReady = () => {
    if (window.YG) {
      widget = new window.YG.Widget(widgetId, {
        width: 480,
        components: 92,
        autoStart: 0,
        backgroundColor: "#fafafa",
        queryColor: "#6C63FF",
        title: "%query%　[%lang%]　　　　　　　　%i%／%total%",
        events: {
          onFetchDone,
          onCaptionChange,
          onVideoChange,
        },
      });

      widget.fetch(content, "English", "us");
    }
  };

  const onFetchDone = (e: FetchDoneEvent) => {
    if (e.totalResult === 0) {
      showNotification({
        type: "error",
        title: "Error",
        message: `コンテンツが見つかりませんでした`,
        duration: 3000,
      });
    }
  };

  const onCaptionChange = (e: CaptionConsumedEvent) => {
    widget.replay();
  };

  const onVideoChange = (e: VideoChangeEvent) => {
    widget.play();
  };

  const initialize = () => {
    if (window.YG) {
      onYouglishAPIReady();
    } else {
      setTimeout(() => {
        initialize();
      }, 500);
    }
  };

  initialize();

  return (
    <div>
      <div id={widgetId}></div>
    </div>
  );
};

export default EnglishVideo;
