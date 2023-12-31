import { ReactNode, useLayoutEffect, useState } from "react";

import Header from "@/components/header/Header";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";
import SideLinkBar from "@/components/side-link-bar/SideLinkBar";

type BaseLayoutProps = {
  children: ReactNode;
};

const OtherLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="h-screen max-w-7xl m-auto">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <Title />
          </div>
        </div>
      </Header>
      <div className="flex flex-col sm:flex-row sm:items-center min-h-screen mt-24 sm:mt-0 px-6">
        <div className="md:w-80 flex justify-center items-center flex-[20%]">
          <SideLinkBar isIcon={true} />
        </div>
        <div className="flex justify-center w-full flex-[80%]">{children}</div>
      </div>
    </div>
  );
};

export default OtherLayout;
