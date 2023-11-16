import Image from "next/image";
import { ReactNode } from "react";

import loginImg from "../../public/login.svg";
import Header from "@/components/header/Header";
import Title from "@/components/title/Title";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="hidden md:block">
        <Header>
          <Title />
        </Header>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-lg mt-12 md:mt-0">
        <div className="flex-grow w-3/5 justify-center items-center mb-12 text-center md:mr-7 lg:mr-36 xl:mr-52">
          <Image
            src={loginImg}
            alt=""
            className="w-[60%] m-auto hidden md:block"
          />
          <div className="md:hidden w-fit m-auto">
            <Title size="lg" />
          </div>
          <p className="mt-6 md:mt-12 text-xs md:text-base">
            あなただけの英語辞書
          </p>
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
