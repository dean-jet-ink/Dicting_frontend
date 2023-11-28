import { ReactElement, ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { AppProps } from "next/app";

import "../../styles/global.css";
import AppProvider from "@/providers";
import { URL } from "url";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(<Component {...pageProps} />);

  return <AppProvider>{pageContent}</AppProvider>;
};

const redirectServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.req;

  const parsedUrl = new URL(url as string);
  const path = parsedUrl.pathname;

  console.log(path);

  if (path === "/login" || path === "/signup") {
    return {
      props: {},
    };
  } else {
    const token = context.req.cookies.token;

    if (token) {
      return {
        props: {},
      };
    } else {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
        props: {},
      };
    }
  }
};

MyApp.getServerSideProps = redirectServerSideProps;

export default MyApp;
