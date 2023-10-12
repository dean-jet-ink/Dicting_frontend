import { ReactNode, useLayoutEffect } from "react";

import Header from "@/components/header/Header";
import UserMenu from "@/features/user/components/UserMenu";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";
import CreateEnglishButton from "@/features/english/components/create-english-form/CreateEnglishButton";
import SearchEnglishInput from "@/features/english/components/filter-english-form/SearchEnglishField";
import FilterEnglishField from "@/features/english/components/filter-english-form/FilterEnglishField";

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

  return (
    <div className="h-screen max-w-7xl m-auto">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <UserMenu />
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
    </div>
  );
};

export default BaseLayout;
