import { FieldError } from "react-hook-form";

type FormErrorProps = {
  error?: FieldError;
};

const FormError = ({ error }: FormErrorProps) => {
  return (
    error && <div className="text-rose-700 text-sm mt-1">{error.message}</div>
  );
};

export default FormError;
