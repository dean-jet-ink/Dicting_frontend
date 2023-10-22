import { ComponentProps, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import Loading from "../loading/Loading";

export type InputProps = {
  error?: FieldError;
  isLoading?: boolean;
} & ComponentProps<"input"> &
  Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, isLoading = false, ...props }, ref) => {
    const borderColor = error ? "border-rose-700" : "border-gray-400";

    return (
      <div className="w-full">
        <div
          className={`border-b ${borderColor} py-2 focus-within:border-violet-400 transition-all duration-300`}
        >
          {isLoading ? (
            <div className="h-8">
              <Loading bg="bg-gray-600" variant="small" />
            </div>
          ) : (
            <input
              className="appearance-none bg-transparent border-none w-full py-1 px-2 focus:outline-none cursor-text"
              {...props}
              ref={ref}
            />
          )}
        </div>
        {error && (
          <div className="text-rose-700 mt-1 text-sm">{error.message}</div>
        )}
      </div>
    );
  }
);

export default Input;
