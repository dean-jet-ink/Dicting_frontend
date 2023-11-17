import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { useGetUser } from "../api/get_user";
import Loading from "@/components/loading/Loading";
import File from "@/components/form/File";
import { UserImageForm } from "../types";
import user from "../../../../public/user.svg";
import Button from "@/components/button/Button";
import useUpdateUserImage from "../api/update_user_image";
import { useNotification } from "@/store/notification/notification";
import Img from "@/components/image/Img";

const UserImageForm = () => {
  const { data, isLoading: isLoadingGet } = useGetUser({});

  const [selectedImg, setSelectedImg] = useState<string>("");

  const { register, handleSubmit, formState, setValue } =
    useForm<UserImageForm>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setValue("image", file);
        setSelectedImg(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const { showNotification } = useNotification();

  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Update",
      message: "プロフィール画像を変更しました",
      duration: 5000,
    });
  };

  const { submit, isLoading: isLoadingUpdate } = useUpdateUserImage({
    onSuccess,
  });

  const onSubmit = (data: UserImageForm) => {
    submit(data);
  };

  const imgStyle =
    "w-32 h-32 md:w-48 md:h-48 border border-gray-400 rounded-full m-auto object-cover border border-gray-300";

  if (isLoadingGet) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-fit m-auto py-10">
        {selectedImg === "" ? (
          <Img img={data.image} defaultImg={user} className={imgStyle} />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={selectedImg} alt="" className={imgStyle} />
        )}
      </div>
      <form
        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <File {...register("image")} onChange={onChange} />
        <Button
          type="submit"
          isLoading={isLoadingUpdate}
          disabled={selectedImg == ""}
        >
          変更
        </Button>
      </form>
    </div>
  );
};

export default UserImageForm;
