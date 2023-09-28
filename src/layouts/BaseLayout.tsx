import { ReactNode, useLayoutEffect } from "react";
import { parseCookies } from "nookies";

import Header from "@/components/header/Header";
import UserMenu from "@/features/user/components/UserMenu";
import Title from "@/components/title/Title";
import axios from "axios";
import { useRouter } from "next/router";

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
    <div className="h-screen">
      <Header>
        <div className="flex items-center gap-10">
          <UserMenu />
          <Title />
        </div>
      </Header>
      {children}
    </div>
  );
};

export default BaseLayout;
