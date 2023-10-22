import Image from "next/image";
import { useGetUser } from "../api/get_user";
import user from "../../../../public/user.svg";
import Loading from "@/components/loading/Loading";

type UserMenuProps = {
  openSideMenu?: () => void;
};

const UserMenu = ({ openSideMenu }: UserMenuProps) => {
  const { data, isLoading } = useGetUser({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="rounded-full border border-gray-600 w-10 cursor-pointer"
      onClick={openSideMenu}
    >
      {data && (
        <Image
          src={data.image ? data.image : user}
          alt=""
          className="rounded-full object-contain"
        />
      )}
    </div>
  );
};

export default UserMenu;
