import Modal from "@/components/modal/Modal";
import ProposalEnglishForm from "./ProposalEnglishForm";

type CreateEnglishModalProps = {
  isOpen: boolean;
  close: () => void;
};

const CreateEnglishModal = ({ isOpen, close }: CreateEnglishModalProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="py-10">
        <ProposalEnglishForm closeProposalModal={close} />
      </div>
    </Modal>
  );
};

export default CreateEnglishModal;
