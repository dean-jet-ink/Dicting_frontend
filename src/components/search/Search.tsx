import { ComponentProps, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

export type SearchProps = ComponentProps<"input"> &
  Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full p-2 border border-gray-300 focus:border-accent outline-none rounded-sm transition-all duration-200"
    />
  );
});

export default Search;
