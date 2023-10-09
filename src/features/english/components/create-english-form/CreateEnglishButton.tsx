import { Plus } from "lucide-react";

import Button from "@/components/button/Button";
import CreateEnglishModal from "./CreateEnglishModal";
import { useState } from "react";
import CreateEnglishForm from "./CreateEnglishForm";

const CreateEnglishButton = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenForm, setOpenForm] = useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  const onClickOpenForm = () => {
    setOpenForm(true);
  };

  const onClickCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <Button type="button" onClick={onClickOpenModal} icon={<Plus />}>
        Create
      </Button>
      <CreateEnglishModal
        isOpen={isOpenModal}
        close={onClickCloseModal}
        openForm={onClickOpenForm}
      />
      <CreateEnglishForm isOpen={isOpenForm} close={onClickCloseForm} />
    </>
  );
};

export default CreateEnglishButton;
