import { BE_URL } from "@/config/constants";
import Image from "next/image";

import googleIcon from "../../../../public/google-icon.svg";
import lineIcon from "../../../../public/line-icon.svg";

type OAuthProps = {
  isLogin: boolean;
};

const OAuth = ({ isLogin }: OAuthProps) => {
  const idPs = [
    {
      label: "Google",
      href: "google",
      icon: googleIcon,
    },
    {
      label: "Line",
      href: "line",
      icon: lineIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {idPs.map((idP) => (
        <a
          key={idP.label}
          href={`${BE_URL}/auth?idp_name=${idP.href}&is_login=${isLogin}`}
        >
          <div className="bg-white hover:bg-subAccent py-2 transition-all duration-300 w-72 rounded-md shadow-md">
            <div className="flex items-center font-bold">
              <div className="ml-5">
                <Image
                  src={idP.icon}
                  width={32}
                  height={32}
                  alt={`${idP.label}アイコン`}
                />
              </div>
              <div className="w-full text-center">
                {isLogin
                  ? `${idP.label}でログイン`
                  : `${idP.label}でサインアップ`}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OAuth;
