import { useState } from "react";
import dayjs from "dayjs";

import EnglishItemContainer from "@/components/container/EnglishItemContainer";
import DeleteIcon from "@/components/deleteIcon/DeleteIcon";
import useGetOutputTimes from "../api/get-output-times";
import useGetOutput from "../api/get-output";
import Loading from "@/components/loading/Loading";
import Modal from "@/components/modal/Modal";
import HistoryContent from "./HistoryContent";
import Button from "@/components/button/Button";
import useDeleteOutput from "../api/delete-output";
import { useNotification } from "@/store/notification/notification";

type HisotryProps = {
  englishItemId: string;
};

const History = ({ englishItemId }: HisotryProps) => {
  const { data: times, isLoading: isLoadingGetOutputTimes } = useGetOutputTimes(
    { englishItemId }
  );

  const {
    data,
    submit: submitGetOutput,
    isLoading: isLoadingGetOuput,
  } = useGetOutput();

  const [isOpenOutput, setOpenOutput] = useState(false);

  const openOutput = (createdAt: Date) => {
    submitGetOutput({
      english_item_id: englishItemId,
      created_at: createdAt,
    });

    setOpenOutput(true);
  };

  const closeOutput = () => {
    setOpenOutput(false);
  };

  const [isOpenDelete, setOpenDelete] = useState(false);

  const [selectedDeleteTime, setSelectedDeleteTime] = useState<Date>();

  const openDelete = (createdAt: Date) => {
    setSelectedDeleteTime(createdAt);

    setOpenDelete(true);
  };

  const closeDelete = () => {
    setOpenDelete(false);
  };

  const { showNotification } = useNotification();

  const onSuccessDelete = () => {
    showNotification({
      type: "success",
      title: "Delete",
      message: `${selectedDeleteTime}のアウトプットを削除しました`,
      duration: 5000,
    });
  };

  const { submit: submitDeleteOutput, isLoading } = useDeleteOutput({
    onSuccess: onSuccessDelete,
  });

  const deleteOutput = (deleteTime: Date) => {
    submitDeleteOutput({
      created_at: deleteTime,
      english_item_id: englishItemId,
    });

    setOpenDelete(false);
  };

  return (
    <>
      <EnglishItemContainer title="History">
        {isLoadingGetOuput ? (
          <Loading bg="bg-gray-600" />
        ) : (
          <ul className="px-8 flex flex-col justify-center gap-5">
            {isLoadingGetOutputTimes ? (
              <Loading bg="bg-gray-600" />
            ) : times?.output_times.length == 0 ? (
              <div className="w-fit m-auto mt-14">Outputの履歴はありません</div>
            ) : (
              <>
                {times?.output_times.map((time) => {
                  return (
                    <li
                      key={dayjs(time).format("YYYY/MM/DD (hh:mm:ss)")}
                      className="flex items-center justify-between"
                    >
                      <div
                        className="text-lg text-accent hover:text-indigo-700 cursor-pointer"
                        onClick={() => openOutput(time)}
                      >
                        {dayjs(time).format("YYYY/MM/DD (hh:mm:ss)")}
                      </div>
                      <DeleteIcon remove={() => openDelete(time)} />
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        )}
      </EnglishItemContainer>

      <Modal isOpen={isOpenOutput} close={closeOutput}>
        {data && <HistoryContent outputs={data.outputs} />}
      </Modal>

      <Modal isOpen={isOpenDelete} close={closeDelete}>
        <div className="p-8">
          <div className="text-center mt-4 mb-10 w-96">
            <span className="text-red-600">
              {dayjs(selectedDeleteTime).format("YYYY/MM/DD (hh:mm:ss)")}
            </span>
            のアウトプットを削除しますか？
          </div>
          <div className="flex gap-8 w-full items-center justify-center">
            <Button
              onClick={() => deleteOutput(selectedDeleteTime!)}
              isLoading={isLoading}
            >
              はい
            </Button>
            <Button variant="secondary" onClick={closeDelete}>
              いいえ
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default History;
