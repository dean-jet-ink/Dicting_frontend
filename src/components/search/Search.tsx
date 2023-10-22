import { SearchIcon } from "lucide-react";
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
        <div className="relative">
          <SearchIcon className="absolute text-gray-400 top-2 left-2" />
          <input
            {...props}
            ref={ref}
            className="w-full p-2 pl-11 border border-gray-300 focus:border-accent outline-none rounded-sm transition-all duration-200 cursor-text"
          />
        </div>
        {error && (
          <div className="text-rose-700 mt-1 text-sm">{error.message}</div>
        )}
      </>
    );
  }
);

export default Search;
