declare global {
  interface Window {
    google: {
      search: {
        cse: {
          element: {
            render: (options: {
              div: string;
              tag: string;
              gname: string;
            }) => void;
            getElement: (gname: string) => {
              execute: (query: string) => void;
            };
          };
        };
      };
      setOnLoadCallback: (
        callback: () => void,
        opt_autoPause?: boolean
      ) => void;
    };
    __gcse: {
      parsetags: string;
      callback: () => void;
    };
  }
}

export {};
