import { ReactElement, ReactNode, ComponentProps } from "react";
import Loading from "../loading/Loading";

const variants = {
  primary: {
    color: "bg-accent",
    loading: "bg-violet-400",
    hover: "hover:bg-violet-400",
  },
  secondary: {
    color: "bg-subAccent",
    loading: "bg-sub",
    hover: "hover:bg-sub",
  },
};

export type ButtonProps = {
  variant?: keyof typeof variants;
  size?: "lg" | "md";
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
  ...props
}: ButtonProps) => {
  const { color, loading, hover } = variants[variant];
  const width = size == "lg" ? "w-72" : "w-32";

  const defaultButtonStyle = `${color} ${hover} hover:text-white font-bold h-10 ${width} rounded-sm transition-all duration-200 text-center shadow-md`;
  const isLoadingButtonStyle = `${loading} text-white font-bold h-10 ${width} rounded-sm text-center cursor-default shadow-md`;
  const buttonStyle = isLoading ? isLoadingButtonStyle : defaultButtonStyle;

  return (
    <button className={buttonStyle}>
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
