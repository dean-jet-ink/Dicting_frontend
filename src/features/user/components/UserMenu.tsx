import Image from "next/image";
import { useGetUser } from "../api/get_user";
import user from "../../../../public/user.svg";
import Loading from "@/components/loading/Loading";

const UserMenu = () => {
  const { data, isLoading } = useGetUser({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="rounded-full border border-gray-600 w-12 cursor-pointer">
      <Image
        src={data.image ? data.image : user}
        alt=""
        className="rounded-full object-contain"
      />
    </div>
  );
};

export default UserMenu;
