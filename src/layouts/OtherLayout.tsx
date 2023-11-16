import { ReactNode, useLayoutEffect, useState } from "react";

import Header from "@/components/header/Header";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";
import SideLinkBar from "@/components/side-link-bar/SideLinkBar";

type BaseLayoutProps = {
  children: ReactNode;
};

type GetTokenParam = {
  token: string | undefined;
};

const OtherLayout = ({ children }: BaseLayoutProps) => {
  const router = useRouter();

  useLayoutEffect(() => {
    const getToken = async () => {
      const result = await axios.get<GetTokenParam>("/api/token");
      const token = result.data.token;
      if (!token) {
        router.push("/login");
      }
    };

    getToken();
  }, []);

  return (
    <div className="h-screen max-w-7xl m-auto">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <Title />
          </div>
        </div>
      </Header>
      <div className="flex min-h-screen px-6">
        <div className="md:w-80 flex justify-center items-center flex-[20%]">
          <SideLinkBar isIcon={true} />
        </div>
        <div className="mt-32 flex justify-center w-full flex-[80%]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OtherLayout;
