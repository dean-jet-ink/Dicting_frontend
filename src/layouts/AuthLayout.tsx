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
      <Header>
        <Title />
      </Header>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-lg">
        <div className="flex-grow w-3/5 justify-center items-center mb-12 text-center md:mr-7 lg:mr-36 xl:mr-52">
          <Image src={loginImg} alt="" width={440} />
          <p className="mt-10 text-base">英語学習をもっとスマートに。</p>
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
