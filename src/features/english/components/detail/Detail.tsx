import { Pen, Volume2 } from "lucide-react";

import { EnglishItem, EnglishItemForm } from "../../types";
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
import EnglishVideo from "../english-video/EnglishVideo";
import Exp from "../exp/Exp";
import EnglishItemContainer from "../../../../components/container/EnglishItemContainer";
import answerResolver from "../../validation/english-item-schema";

type DetailProps = {
  englishItem: EnglishItem;
  isCreate?: boolean;
  closeCreateModal?: () => void;
  refetch?: () => void;
};

const Detail = ({
  englishItem,
  isCreate = false,
  closeCreateModal,
  refetch,
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

  const { content, translations, en_explanation, proficiency, exp, imgs } =
    englishItem;

  const { register, handleSubmit, control, formState, getValues, setValue } =
    useForm<EnglishItemForm>({
      mode: "all",
      criteriaMode: "all",
      defaultValues: {
        ...englishItem,
        // useFieldArrayで使用できる型に変換
        translations: translations.map((translation) => ({ translation })),
      },
      resolver: answerResolver,
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
      duration: 5000,
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

    refetch?.();
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
        <div className="flex items-center justify-between gap-2 mb-10">
          <Switch
            id="editSwitch"
            flag={isEdit}
            toggleFlag={toggleEdit}
            icon={<Pen className="w-4" />}
          />
          <div className="flex items-center gap-8">
            <ProficiencyIcon proficiency={proficiency} />
            <Exp proficiency={proficiency} exp={exp} />
          </div>
        </div>
      )}
      <h2 className="text-lg md:text-2xl mb-20 w-fit m-auto">{content}</h2>

      <div className="flex flex-col gap-24">
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
          <EnglishItemContainer title="Video">
            <EnglishVideo content={content} />
          </EnglishItemContainer>
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
