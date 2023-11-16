import Image from "next/image";
import { useGetUser } from "../api/get_user";
import user from "../../../../public/user.svg";
import Loading from "@/components/loading/Loading";
import Img from "@/components/image/Img";

type UserIconProps = {
  openSideMenu?: () => void;
};

const UserIcon = ({ openSideMenu }: UserIconProps) => {
  const { data, isLoading } = useGetUser({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="rounded-full border border-gray-300 w-8 h-8 md:w-12 md:h-12 cursor-pointer"
      onClick={openSideMenu}
    >
      <Img
        img={data.image}
        defaultImg={user}
        className="rounded-full w-8 h-8 md:w-12 md:h-12 object-cover"
      />
    </div>
  );
};

export default UserIcon;
