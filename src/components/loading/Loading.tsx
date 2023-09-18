const variants = {
  small: { width: "w-2", height: "h-2", space: "space-x-3" },
  mid: { width: "w-4", height: "h-4", space: "space-x-6" },
};

export type LoadingProps = {
  variant?: keyof typeof variants;
};

const Loading = ({ variant = "small" }: LoadingProps) => {
  const { width, height, space } = variants[variant];

  return (
    <div className={`${space} flex justify-center`}>
      <div
        className={`${width} ${height} animate-ping  bg-gray-600 rounded-full`}
      ></div>
      <div
        className={`${width} ${height} animate-ping bg-gray-600 rounded-full animation-delay-200`}
      ></div>
      <div
        className={`${width} ${height} animate-ping bg-gray-600 rounded-full animation-delay-400`}
      ></div>
    </div>
  );
};

export default Loading;
