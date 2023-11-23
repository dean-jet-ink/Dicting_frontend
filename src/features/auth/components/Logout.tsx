import { LogOut } from "lucide-react";
import useLogout from "../api/logout";

type LogoutProps = {
  isIcon: boolean;
};

const Logout = ({ isIcon }: LogoutProps) => {
  const { submit, isLoading } = useLogout();

  const onClickSubmit = () => {
    submit();
  };

  return (
    <div className="hover:text-accent cursor-pointer" onClick={onClickSubmit}>
      <div className={`${isIcon ? "hidden" : "block"} md:block`}>Log out</div>
      <LogOut className={`${isIcon ? "block" : "hidden"} md:hidden`} />
    </div>
  );
};

export default Logout;
