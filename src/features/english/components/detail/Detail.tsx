import { PlayCircle, Volume2 } from "lucide-react";

import { EnglishItem, EnglishItemForm } from "../../types";
import Border from "@/components/border/border";
import Button from "@/components/button/Button";
import { useFieldArray, useForm } from "react-hook-form";
import MeaningForm from "./form/MeaningForm";
import ImageForm from "./form/ImageForm";
import { useEffect, useState } from "react";
import ExampleForm from "./form/ExampleForm";

type DetailProps = {
  englishItem: EnglishItem;
  isCreate?: boolean;
};

const Detail = ({
  englishItem: {
    content,
    translations,
    en_explanation,
    examples,
    imgs,
    proficiency,
  },
  isCreate = false,
}: DetailProps) => {
  const { register, handleSubmit, control, formState, getValues, setValue } =
    useForm<EnglishItemForm>({
      defaultValues: {
        content,
        // useFieldArrayで使用できる型に変換
        translations: translations.map((translation) => ({ translation })),
        en_explanation,
        examples,
        imgs,
      },
    });

  const translationsFields = useFieldArray({
    control,
    name: "translations",
  });

  const exampleFields = useFieldArray({
    control,
    name: "examples",
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isCreate) {
      setIsEdit(true);
    }
  }, []);

  const onSubmit = ({
    content,
    translations,
    en_explanation,
    examples,
    imgs,
  }: EnglishItemForm) => {
    const englishItemForm = {
      content,
      // バックエンドの型に再変換
      translations: translations.map((translation) => translation.translation),
      en_explanation,
      examples,
      imgs,
    };

    console.log(englishItemForm);
  };

  const onClickSubmit = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="w-106">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl">{content}</h2>
        <Volume2 className="cursor-pointer" />
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <MeaningForm
            isEdit={isEdit}
            getValues={getValues}
            translationFields={translationsFields}
            register={register}
            formState={formState}
          />
        </div>
        <div>
          <ImageForm
            isEdit={isEdit}
            content={content}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
        <div>
          <ExampleForm
            isEdit={isEdit}
            getValues={getValues}
            exampleFields={exampleFields}
            register={register}
            formState={formState}
          />
        </div>
      </div>

      {isCreate ?? (
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

      {isCreate && (
        <div className="w-fit m-auto mt-12">
          <Button onClick={onClickSubmit}>登録</Button>
        </div>
      )}
    </div>
  );
};

export default Detail;
