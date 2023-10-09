import { ComponentProps, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type SearchProps = { error?: FieldError } & ComponentProps<"input"> &
  Omit<
    Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>,
    "onChange"
  >;

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <input
          {...props}
          ref={ref}
          className="w-full p-2 border border-gray-300 focus:border-accent outline-none rounded-sm transition-all duration-200 cursor-text"
        />
        {error && (
          <div className="text-rose-700 mt-1 text-sm">{error.message}</div>
        )}
      </>
    );
  }
);

export default Search;
