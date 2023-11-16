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
      <div className="hidden md:block">
        <Button
          type="button"
          onClick={onClickOpenModal}
          icon={<Plus size={16} />}
        >
          Create
        </Button>
      </div>
      <div className="md:hidden">
        <Button
          type="button"
          size="sm"
          onClick={onClickOpenModal}
          icon={<Plus size={16} />}
        >
          Create
        </Button>
      </div>
      <CreateEnglishModal isOpen={isOpenModal} close={onClickCloseModal} />
    </div>
  );
};

export default CreateEnglishButton;
