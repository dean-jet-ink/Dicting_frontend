import { Pen, PlayCircle, Volume2 } from "lucide-react";

import { EnglishItem, EnglishItemForm } from "../../types";
import Border from "@/components/border/border";
import Button from "@/components/button/Button";
import { useFieldArray, useForm } from "react-hook-form";
import MeaningForm from "./form/meaning/MeaningForm";
import ImageForm from "./form/ImageForm";
import { useCallback, useEffect, useState } from "react";
import { useCreateEnglishItem } from "../../api/create-english-item";
import { useNotification } from "@/store/notification/notification";
import ProficiencyIcon from "../proficiency/Proficiency";
import Switch from "@/components/switch/Switch";
import ExampleFormList from "./form/example/ExampleFormList";
import useUpdateEnglishItem from "../../api/update-english-item";
import { UseMutateFunction } from "react-query";

type DetailProps = {
  englishItem: EnglishItem;
  isCreate?: boolean;
  closeCreateModal?: () => void;
  getEnglishItem?: UseMutateFunction<EnglishItem, unknown, string, unknown>;
};

const Detail = ({
  englishItem,
  isCreate = false,
  closeCreateModal,
  getEnglishItem,
}: DetailProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = useCallback((toggle: boolean) => {
    setIsEdit(toggle);
  }, []);

  useEffect(() => {
    if (isCreate) {
      setIsEdit(true);
    }
  }, []);

  const { content, translations, en_explanation, proficiency, imgs } =
    englishItem;

  const { register, handleSubmit, control, formState, getValues, setValue } =
    useForm<EnglishItemForm>({
      defaultValues: {
        ...englishItem,
        // useFieldArrayで使用できる型に変換
        translations: translations.map((translation) => ({ translation })),
      },
    });

  const translationsFields = useFieldArray({
    control,
    name: "translations",
  });

  const imgFields = useFieldArray({
    control,
    name: "imgs",
  });

  const exampleFields = useFieldArray({
    control,
    name: "examples",
  });

  const { showNotification } = useNotification();

  const onSuccessCreate = () => {
    showNotification({
      type: "success",
      title: "Create english item",
      message: `【${content}】を作成しました`,
      duration: 3000,
    });

    close();
  };

  const { submit: create, isLoading: isLoadingCreate } = useCreateEnglishItem({
    onSuccess: onSuccessCreate,
  });

  const onSubmitCreate = (payload: EnglishItemForm) => {
    const translations = payload.translations;

    const englishItemForm = {
      ...payload,
      // バックエンドの型に再変換
      translations: translations.map((translation) => translation.translation),
    };

    create(englishItemForm);
  };

  const onClickSubmitCreate = () => {
    handleSubmit(onSubmitCreate)();
    closeCreateModal?.();
  };

  const onSuccessUpdate = () => {
    showNotification({
      type: "success",
      title: "Update english item",
      message: `【${content}】を更新しました`,
      duration: 3000,
    });

    getEnglishItem?.(content);

    setIsEdit(false);
  };

  const { submit: update, isLoading: isLoadingUpdate } = useUpdateEnglishItem({
    onSuccess: onSuccessUpdate,
  });

  const onSubmitUpdate = (payload: EnglishItemForm) => {
    const translations = payload.translations;
    const englishItemForm = {
      ...payload,
      // バックエンドの型に再変換
      translations: translations.map((translation) => translation.translation),
    };

    update(englishItemForm);
  };

  const onClickSubmitUpdate = () => {
    handleSubmit(onSubmitUpdate)();
  };

  return (
    <div>
      {!isCreate && (
        <div className="flex items-center gap-2">
          <Switch
            id="editSwitch"
            flag={isEdit}
            toggleFlag={toggleEdit}
            icon={<Pen className="w-4" />}
          />
        </div>
      )}
      <div className="flex items-center justify-center gap-4 mb-8 relative">
        <h2 className="text-2xl">{content}</h2>
        <Volume2 className="cursor-pointer" />
        {!isCreate && (
          <div className="absolute right-2">
            <ProficiencyIcon proficiency={proficiency} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <MeaningForm
            isEdit={isEdit}
            content={content}
            translations={translations}
            enExplanation={en_explanation}
            translationFields={translationsFields}
            register={register}
            formState={formState}
            setValue={setValue}
          />
        </div>
        <div>
          <ImageForm
            isEdit={isEdit}
            content={content}
            imgs={imgs}
            imgFields={imgFields}
          />
        </div>
        <div>
          <ExampleFormList
            isEdit={isEdit}
            getValues={getValues}
            exampleFields={exampleFields}
            register={register}
            formState={formState}
            setValue={setValue}
          />
        </div>
        {!isEdit && (
          <div>
            <div>
              <h3 className="text-subAccent">Video</h3>
              <Border />
            </div>
            <div>
              <div className="w-80 h-60 m-auto border border-gray-400 flex justify-center items-center">
                <PlayCircle />
              </div>
            </div>
          </div>
        )}
      </div>

      {isEdit && (
        <div className="w-fit m-auto mt-12">
          {isCreate ? (
            <Button onClick={onClickSubmitCreate} isLoading={isLoadingCreate}>
              登録
            </Button>
          ) : (
            <Button onClick={onClickSubmitUpdate} isLoading={isLoadingUpdate}>
              更新
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
