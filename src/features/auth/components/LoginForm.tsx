import Input from "@/components/form/Input";
import { useForm } from "react-hook-form";
import { Credential } from "../types";
import Button from "@/components/button/Button";
import { useLogin } from "../api/login";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<Credential>();
  const { submit, isLoading } = useLogin();

  const onSubmit = (data: Credential) => {
    submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-3 items-center">
        <Input
          placeholder="メールアドレス"
          type="email"
          {...register("email", { required: "この項目は必須です" })}
          error={formState.errors["email"]}
        />
        <Input
          placeholder="パスワード"
          type="password"
          {...register("password", { required: "この項目は必須です" })}
          error={formState.errors["password"]}
        />
        <Button type="submit" size="lg" isLoading={isLoading}>
          ログイン
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
