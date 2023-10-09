import Modal from "@/components/modal/Modal";
import PreCreateEnglishForm from "./PreCreateEnglishForm";

type CreateEnglishModalProps = {
  isOpen: boolean;
  close: () => void;
  openForm: () => void;
};

const CreateEnglishModal = ({
  isOpen,
  close,
  openForm,
}: CreateEnglishModalProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="py-10">
        <PreCreateEnglishForm close={close} openForm={openForm} />
      </div>
    </Modal>
  );
};

export default CreateEnglishModal;
