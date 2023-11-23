import Logout from "@/features/auth/components/Logout";
import { Image as ImgIcon, User } from "lucide-react";
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
            <div className={`${isIcon ? "hidden" : "block"} md:block`}>
              Profile
            </div>
            <User className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
        <li>
          <Link href="/user/image" className="hover:text-accent">
            <div className={`${isIcon ? "hidden" : "block"} md:block`}>
              Image
            </div>
            <ImgIcon className={`${isIcon ? "block" : "hidden"} md:hidden`} />
          </Link>
        </li>
        <li>
          <Logout isIcon={isIcon} />
        </li>
      </ul>
    </div>
  );
};

export default SideLinkBar;
