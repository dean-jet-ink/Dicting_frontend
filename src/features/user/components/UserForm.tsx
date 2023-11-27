import { useForm } from "react-hook-form";
import { useGetUser } from "../api/get_user";
import { User, UserForm } from "../types";
import Input from "@/components/form/Input";
import Loading from "@/components/loading/Loading";
import Button from "@/components/button/Button";
import useUpdateUser from "../api/update_user";
import { useNotification } from "@/store/notification/notification";

const UserForm = () => {
  const { data, isLoading: isLoadingGet } = useGetUser({});

  const { register, handleSubmit, formState } = useForm<UserForm>({
    defaultValues: { ...data },
  });

  const { showNotification } = useNotification();

  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Update",
      message: "ユーザー情報を更新しました",
      duration: 5000,
    });
  };

  const { submit, isLoading: isLoadingUpdate } = useUpdateUser({ onSuccess });

  const onSubmit = (data: UserForm) => {
    submit(data);
  };

  const nameId = "name";
  const emailId = "email";

  if (isLoadingGet) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-start md:justify-center gap-10"
    >
      <div className="w-full md:w-2/3">
        <label htmlFor={nameId} className="block mb-4">
          Name
        </label>
        <Input
          {...register("name", { required: "この項目は必須です" })}
          error={formState.errors["name"]}
          id={nameId}
        />
      </div>
      <div className="w-full md:w-2/3">
        <label htmlFor={emailId} className="block mb-4">
          Email
        </label>
        <Input
          type="email"
          {...register("email", { required: "この項目は必須です" })}
          error={formState.errors["email"]}
          id={emailId}
        />
      </div>

      <div className="mt-6">
        <Button type="submit" isLoading={isLoadingUpdate}>
          変更
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
