import { Image, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

type SideLinkBarProps = {
  isIcon?: boolean;
};

const SideLinkBar = ({ isIcon = false }: SideLinkBarProps) => {
  return (
    <div className="p-4">
      <ul className="flex flex-col items-center justify-center gap-10">
        <li>
          <Link href="/user/profile" className="hover:text-accent">
            <div className={`${isIcon && "hidden"} md:block`}>Profile</div>
            <User className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
        <li>
          <Link href="/user/image" className="hover:text-accent">
            <div className={`${isIcon && "hidden"} md:block`}>Image</div>
            <Image className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
        <li>
          <Link href="/user/setting" className="hover:text-accent">
            <div className={`${isIcon && "hidden"} md:block`}>Setting</div>
            <Settings className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
        {/* <li>
          <Link href="" className="hover:text-accent">
            Report
          </Link>
        </li> */}
        <li>
          <Link href={"/login"} className="hover:text-accent">
            <div className={`${isIcon && "hidden"} md:block`}>Log out</div>
            <LogOut className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideLinkBar;