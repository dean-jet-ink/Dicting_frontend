import { BE_URL } from "@/config/constants";
import LoginForm from "@/features/auth/components/LoginForm";
import OAuth from "@/features/auth/components/OAuth";
import MyLink from "@/components/link/MyLink";
import AuthLayout from "@/layouts/AuthLayout";
import { ReactElement } from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center xl:gap-10 gap-8">
      <div>
        <LoginForm />
      </div>
      <div>
        <OAuth isLogin={true} />
      </div>
      <MyLink label="サインアップ" href="/signup" />
    </div>
  );
};

LoginPage.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
