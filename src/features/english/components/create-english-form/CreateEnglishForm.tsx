import Modal from "@/components/modal/Modal";
import { EnglishItem, Proposal } from "../../types";
import queryClient from "@/lib/react_query";
import Detail from "../detail/Detail";
import { ENV } from "@/config/constants";

type CreateEnglishFormProps = {
  isOpen: boolean;
  close: () => void;
};

const dummyProposal = {
  content: "Test",
  translations: ["テストa", "テストb", "テストc"],
  en_explanation: "this is a test",
  examples: [
    {
      example: "this is a test",
      translation: "これはテストaです",
    },
    {
      example: "this is a test",
      translation: "これはテストbです",
    },
    {
      example: "this is a test",
      translation: "これはテストcです",
    },
  ],
};

const CreateEnglishForm = ({ isOpen, close }: CreateEnglishFormProps) => {
  const proposal = queryClient.getQueryData<Proposal>(["proposal"]);

  if (ENV === "dev") {
    return (
      <Modal isOpen={isOpen} close={close}>
        <Detail
          englishItem={dummyProposal as EnglishItem}
          isCreate={true}
          closeCreateModal={close}
        />
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} close={close}>
      {proposal && (
        <Detail
          englishItem={proposal as EnglishItem}
          isCreate={true}
          closeCreateModal={close}
        />
      )}
    </Modal>
  );
};

export default CreateEnglishForm;
