import MyLink from "@/components/link/MyLink";
import OAuth from "@/features/auth/components/OAuth";
import SignupForm from "@/features/auth/components/SignupForm";
import AuthLayout from "@/layouts/AuthLayout";
import { ReactElement } from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center xl:gap-10 gap-8">
      <div>
        <SignupForm />
      </div>
      <div>
        <OAuth isLogin={false} />
      </div>
      <MyLink label="ログイン" href="/auth/login" />
    </div>
  );
};

SignupPage.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignupPage;
