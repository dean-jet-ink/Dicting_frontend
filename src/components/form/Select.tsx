import { ComponentProps, ReactNode, forwardRef } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type Option = {
  label: ReactNode;
  value: string | number;
  selected: boolean;
};

export type SelectProps = {
  options: Option[];
} & ComponentProps<"select"> &
  Omit<Partial<UseFormRegisterReturn>, "onChange">;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className="py-2 pr-5 bg-transparent border-0 border-b border-gray-600 outline-none cursor-pointer"
      >
        {options.map(({ label, value, selected }) => {
          return (
            <option key={label?.toString()} value={value} selected={selected}>
              {label}
            </option>
          );
        })}
      </select>
    );
  }
);

export default Select;
