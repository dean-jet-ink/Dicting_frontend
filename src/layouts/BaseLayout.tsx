import { ReactNode, useLayoutEffect, useState } from "react";

import Header from "@/components/header/Header";
import UserMenu from "@/features/user/components/UserMenu";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";
import CreateEnglishButton from "@/features/english/components/create-english-form/CreateEnglishButton";
import SearchEnglishInput from "@/features/english/components/filter-english-form/SearchEnglishField";
import FilterEnglishField from "@/features/english/components/filter-english-form/FilterEnglishField";
import SideMenu from "@/components/sidemenu/SideMenu";
import Link from "next/link";

type BaseLayoutProps = {
  children: ReactNode;
};

type GetTokenParam = {
  token: string | undefined;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
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

  const [isOpen, setOpen] = useState(false);

  const toggleSideMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="h-screen max-w-7xl m-auto">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <UserMenu openSideMenu={toggleSideMenu} />
            <Title />
          </div>
          <div className="flex justify-center items-center gap-8">
            <FilterEnglishField />
            <div className="w-80">
              <SearchEnglishInput />
            </div>
            <CreateEnglishButton />
          </div>
        </div>
      </Header>
      {children}

      <SideMenu isOpen={isOpen} close={toggleSideMenu} side="left" size="sm">
        <div className="p-4">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <Link href="">Profile</Link>
            </li>
            <li>
              <Link href="">Report</Link>
            </li>
            <li>
              <Link href={"/login"}>Log out</Link>
            </li>
          </ul>
        </div>
      </SideMenu>
    </div>
  );
};

export default BaseLayout;
