import Image from "next/image";
import { ReactNode } from "react";

import loginImg from "../../public/login.svg";
import autoprefixer from "autoprefixer";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="xl:flex justify-center items-center">
        <div className="relative flex flex-col justify-center items-center mb-12 text-center text-4xl xl:mr-52">
          <h1 className="absolute left-0 right-0 top-12 font-bold text-sub animate-text-shadow-drop-center">
            English
          </h1>
          <Image src={loginImg} alt="" width={440} />
          <p className="xl:text-sm text-xs text-sub mt-5">
            英単語、フレーズをあなたのものにする。
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
