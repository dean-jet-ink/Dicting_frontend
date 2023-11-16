import { ReactElement, ReactNode, ComponentProps } from "react";
import Loading from "../loading/Loading";

const variants = {
  primary: {
    color: "bg-accent",
    loading: "bg-indigo-600",
    hover: "hover:bg-indigo-600",
  },
  secondary: {
    color: "bg-gray-400",
    loading: "bg-gray-500",
    hover: "hover:bg-gray-500",
  },
};

export type ButtonProps = {
  variant?: keyof typeof variants;
  size?: "lg" | "md" | "sm";
  children: ReactNode;
  isLoading?: boolean;
  icon?: ReactElement;
} & Omit<ComponentProps<"button">, "className">;

const Button = ({
  variant = "primary",
  size = "md",
  type = "button",
  children,
  isLoading,
  icon,
  disabled,
  ...props
}: ButtonProps) => {
  const { color, loading, hover } = variants[variant];
  const width =
    size === "lg" ? "w-72" : size === "md" ? "w-32" : "w-24 text-xs h-8";

  const baseStyle = `text-white text-sm font-bold h-10 ${width} rounded-sm transition-all duration-200 text-center shadow-md`;
  const defaultStyle = `${baseStyle} ${color} ${hover}`;
  const isLoadingStyle = `${baseStyle} ${loading}`;
  const disabledStyle = `${baseStyle} ${loading} pointer-events-none`;

  return (
    <button
      className={
        isLoading ? isLoadingStyle : disabled ? disabledStyle : defaultStyle
      }
      type={type}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <Loading />
      ) : icon ? (
        <div className="flex items-center justify-center">
          <div className="mr-2">{icon}</div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
