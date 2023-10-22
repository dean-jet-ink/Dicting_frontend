import { Plus } from "lucide-react";

import Button from "@/components/button/Button";
import CreateEnglishModal from "./CreateEnglishModal";
import { useState } from "react";

const CreateEnglishButton = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button type="button" onClick={onClickOpenModal} icon={<Plus />}>
        Create
      </Button>
      <CreateEnglishModal isOpen={isOpenModal} close={onClickCloseModal} />
    </div>
  );
};

export default CreateEnglishButton;
