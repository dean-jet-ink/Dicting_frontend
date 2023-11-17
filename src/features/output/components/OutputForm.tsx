import { useFieldArray, useForm } from "react-hook-form";
import { Answers, CreateOutputForm, Output } from "../types";
import OutputInput from "./OutputInput";
import PlusButton from "@/components/plus-button/PlusButton";
import { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import useAnswerQuestions from "../api/answer-questions";
import useCreateOutput from "../api/create-output";
import { useNotification } from "@/store/notification/notification";
import { ChevronDown } from "lucide-react";
import answersResolver from "../validation/answer-schema";

type OutputFormProps = {
  englishItemId: string;
  content: string;
};

const OutputForm = ({ englishItemId, content }: OutputFormProps) => {
  const {
    data,
    submit: submitAnswerQuestions,
    isLoading: isLoadingAnswerQuestions,
    isSuccess,
  } = useAnswerQuestions({});

  const { register, handleSubmit, formState, control, setValue, getValues } =
    useForm<Answers>({
      mode: "all",
      criteriaMode: "all",
      resolver: answersResolver,
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "answers",
  });

  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    append({ index: 0, question: "", answer: "" });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const appendField = () => {
    append({ index: fields.length, question: "", answer: "" });
  };

  const onSubmit = (data: Answers) => {
    data.english_item_id = englishItemId;
    data.content = content;
    submitAnswerQuestions(data);

    setIsAnswered(true);
  };

  const { showNotification } = useNotification();

  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Save Output",
      message: "アウトプットの内容を保存しました",
      duration: 5000,
    });
  };

  const { submit: submitCreateOutput, isLoading: isLoadingCreateOutput } =
    useCreateOutput({ onSuccess });

  const [isSaved, setSaved] = useState(false);

  const onClickSubmit = () => {
    const createOutputForm: CreateOutputForm = {
      english_item_id: englishItemId,
      outputs: [],
    };

    const answers = getValues("answers");

    answers.forEach((answer) => {
      const output: Omit<Output, "id" | "created_at"> = {
        index: answer.index,
        question: answer.question,
        answer: answer.answer,
        advice: "",
      };

      createOutputForm.outputs.push(output);
    });

    createOutputForm.outputs.forEach((output) => {
      data?.advice_list.forEach((advice) => {
        if (advice.index === output.index) {
          output.advice = advice.advice;
        }
      });
    });

    submitCreateOutput(createOutputForm);
    setSaved(true);
  };

  return (
    <div className="w-full sm:w-[80vw] max-w-[1024px] py-10">
      <div className="text-center mb-16">
        <h2 className="md:text-xl">
          以下の日本語を 【{content}】 を使用した英語にしてください
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:px-10">
        <div className="flex flex-col items-center justify-center gap-12">
          {fields.map(({ id, answer }, index) => {
            return (
              <div key={id} className="w-full">
                <div className="text-[42px] text-gray-400 tracking-[8px] mb-8">
                  Q{index + 1}
                </div>
                <OutputInput
                  key={id}
                  content={content}
                  answer={answer}
                  register={register}
                  setValue={setValue}
                  remove={remove}
                  error={formState.errors.answers?.[index]?.answer}
                  index={index}
                  disabled={isAnswered}
                />
                {data && (
                  <>
                    <ChevronDown className="my-3 m-auto" />
                    <div className="p-6 bg-sub2 rounded-sm">
                      {
                        data.advice_list.filter(
                          (advice) => advice.index === index
                        )[0].advice
                      }
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          {fields.length < 3 && !isAnswered && (
            <div className="mr-auto">
              <PlusButton plusFn={appendField} />
            </div>
          )}

          {isAnswered && isSuccess ? (
            <Button
              type="button"
              onClick={onClickSubmit}
              isLoading={isLoadingCreateOutput}
              disabled={isSaved}
            >
              Save
            </Button>
          ) : (
            <Button type="submit" isLoading={isLoadingAnswerQuestions}>
              Answer
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OutputForm;
