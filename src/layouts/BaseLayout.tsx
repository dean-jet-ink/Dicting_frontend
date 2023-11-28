import { ReactNode, useLayoutEffect, useState } from "react";

import Header from "@/components/header/Header";
import UserIcon from "@/features/user/components/UserIcon";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";
import CreateEnglishButton from "@/features/english/components/create-english-form/CreateEnglishButton";
import SearchEnglishInput from "@/features/english/components/search/SearchEnglish";
import FilterEnglishField from "@/features/english/components/sort/SortProficiency";
import SideMenu from "@/components/sidemenu/SideMenu";
import SideLinkBar from "@/components/side-link-bar/SideLinkBar";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleSideMenu = () => {
    setOpen(!isOpen);
  };

  const [isOpenMobileSearch, setOpenMobileSearch] = useState(false);

  const openMobileSearch = () => {
    setOpenMobileSearch(true);
  };

  const closeMobileSearch = () => {
    setOpenMobileSearch(false);
  };

  return (
    <div className="max-w-7xl m-auto px-7">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div
            className={`${
              isOpenMobileSearch ? "hidden" : "block"
            } md:flex items-center gap-16`}
          >
            <UserIcon openSideMenu={toggleSideMenu} />
            <div className="hidden lg:block">
              <Title />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div
              className={`${isOpenMobileSearch ? "hidden" : "block"} md:block`}
            >
              <FilterEnglishField />
            </div>
            <div className={`${isOpenMobileSearch && "w-screen"} md:w-80`}>
              <SearchEnglishInput
                isOpenMobile={isOpenMobileSearch}
                open={openMobileSearch}
                close={closeMobileSearch}
              />
            </div>
            <div
              className={`${isOpenMobileSearch ? "hidden" : "block"} md:block`}
            >
              <CreateEnglishButton />
            </div>
          </div>
        </div>
      </Header>
      {children}

      <SideMenu isOpen={isOpen} close={toggleSideMenu} side="left" size="sm">
        <SideLinkBar />
      </SideMenu>
    </div>
  );
};

export default BaseLayout;
