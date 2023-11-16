import Modal from "@/components/modal/Modal";
import { EnglishItem, Proposal } from "../../types";
import Detail from "../detail/Detail";

type CreateEnglishFormProps = {
  proposal: Proposal;
  isOpen: boolean;
  close: () => void;
};

const CreateEnglishForm = ({
  proposal,
  isOpen,
  close,
}: CreateEnglishFormProps) => {
  return (
    isOpen && (
      <Modal isOpen={isOpen} close={close} isMask={false}>
        <div className="sm:w-[80vw] lg:w-[980px]">
          {proposal && (
            <Detail
              englishItem={proposal as EnglishItem}
              isCreate={true}
              closeCreateModal={close}
            />
          )}
        </div>
      </Modal>
    )
  );
};

export default CreateEnglishForm;
