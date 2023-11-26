export type SearchedWord = {
  searchedWord: string;
};

export type EnglishContent = {
  content: string;
};

export type Proficiency = "Learning" | "Understand" | "Mastered";

export type Example = {
  id?: string;
  example: string;
  translation: string;
};

export type Img = {
  id?: string;
  url: string;
  is_thumbnail: boolean;
};

export type EnglishItem = {
  id: string;
  content: string;
  translations: string[];
  en_explanation: string;
  examples: Example[];
  imgs: Img[];
  proficiency: Proficiency;
  exp: number;
};

export type EnglishItemInfo = Omit<EnglishItem, "examples" | "imgs"> & {
  img: string;
};

export type EnglishItems = {
  english_items: EnglishItemInfo[];
};

export type Proposal = Omit<
  EnglishItem,
  "id" | "examples" | "imgs" | "proficiency" | "exp"
> & { examples: Omit<Example, "id">[] };

export type Translation = {
  translation: string;
};

export type EnglishItemFormForHook = {
  id?: string;
  content: string;
  translations: Translation[];
  en_explanation: string;
  examples: Example[];
  imgs?: Img[];
};

export type EnglishItemForm = Omit<EnglishItemFormForHook, "translations"> & {
  translations: string[];
};

export type DeleteEnglishItem = {
  id: string;
};

// Youglish リファレンス
// https://youglish.com/api/doc/js-api
export interface VideoWidget {
  fetch: (query: string, lang: VideoLanguage, accent?: VideoAccent) => void;
  pause: () => void;
  play: () => void;
  replay: () => void;
  getSpeed: () => number;
  setSpeed: (suggestedRate: number) => void;
  move: (seconds: number) => void;
  next: () => void;
  previous: () => void;
  close: () => void;
  addEventListener: (event: VideoEventName, listener: VideoListener) => void;
  removeEventListener: (event: VideoEventName, listener: VideoListener) => void;
  new (id: string, options: WidgetOptions): VideoWidget;
}

type WidgetOptions = {
  width: number;
  components: number;
  autoStart: 1 | 0;
  backgroundColor?: string;
  markerColor?: string;
  queryColor?: string;
  title?: string;
  events?: {
    onFetchDone?: (e: FetchDoneEvent) => void;
    onVideoChange?: (e: VideoChangeEvent) => void;
    onCaptionChange?: (e: CaptionChangeEvent) => void;
    onCaptionConsumed?: (e: CaptionConsumedEvent) => void;
    onPlayerStateChange?: (e: PlayerStateChangeEvent) => void;
    onSpeedChange?: (e: SpeedChangeEvent) => void;
    onError?: (e: ErrorEvent) => void;
  };
};

type VideoLanguage =
  | "Arabic"
  | "Chinese"
  | "Dutch"
  | "English"
  | "French"
  | "German"
  | "Greek"
  | "Hebrew"
  | "Italian"
  | "Japanese"
  | "Korean"
  | "Polish"
  | "Portuguese"
  | "Russian"
  | "Spanish"
  | "Swedish"
  | "Thai"
  | "Turkish"
  | "Ukrainian"
  | "Sign Languages";

type VideoAccent = "us" | "uk" | "aus" | "ca" | "ie" | "sco" | "nz";

type VideoEventName =
  | "onFetchDone"
  | "onVideoChange"
  | "onCaptionChange"
  | "onCaptionConsumed"
  | "onPlayerReady"
  | "onPlayerStateChange"
  | "onSpeedChange"
  | "onError";

type VideoListener =
  | "fetch"
  | "pause"
  | "play"
  | "replay"
  | "getSpeed"
  | "setSpeed"
  | "move"
  | "next"
  | "previous"
  | "close"
  | "addEventListener";

export type FetchDoneEvent = {
  query: string;
  lang: VideoLanguage;
  accent: VideoAccent;
  totalResult: number;
};

export type VideoChangeEvent = {
  video: string;
  trackNumber: number;
};

export type CaptionChangeEvent = {
  caption: string;
  id: number;
};

export type CaptionConsumedEvent = {
  id: number;
};

export type PlayerStateChangeEvent = {
  state: PlayerState;
};

// YG.PlayerState.UNSTARTED(-1);
// YG.PlayerState.ENDED(0);
// YG.PlayerState.PLAYING(1);
// YG.PlayerState.PAUSED(2);
// YG.PlayerState.BUFFERING(3);
// YG.PlayerState.CUED(5);
type PlayerState = -1 | 0 | 1 | 2 | 3 | 5;

export type SpeedChangeEvent = {
  speed: number;
};

export type ErrorEvent = {
  code: VideoErrCode;
};

// YG.Error.PLAYER (1)
// YG.Error.OUTDATED_BROWSER (2)
// YG.Error.TIMEOUT (3)
type VideoErrCode = 1 | 2 | 3;

export type RequiredExp = {
  understand_exp: number;
  mastered_exp: number;
};
