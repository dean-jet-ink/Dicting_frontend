import { ReactNode } from "react";

export type SwitchProps = {
  id: string;
  flag: boolean;
  toggleFlag: (checked: boolean) => void;
  icon?: ReactNode;
};

const Switch = ({ id, flag, toggleFlag, icon }: SwitchProps) => {
  const baseBarStyle = "w-16 h-8 relative block rounded-full";
  const disableBarStyle = `${baseBarStyle} bg-subAccent`;
  const enableBarStyle = `${baseBarStyle} bg-indigo-300`;

  const baseBallStyle =
    "w-8 h-8 rounded-full absolute top-0 transition-all duration-300 cursor-pointer shadow-md";
  const disableBallStyle = `${baseBallStyle} left-0 bg-gray-300`;
  const enableBallStyle = `${baseBallStyle} translate-x-full bg-accent`;

  const baseIconStyle = "w-full h-full flex justify-center items-center";
  const disableIconStyle = `${baseIconStyle} text-gray-500`;
  const enableIconStyle = `${baseIconStyle} text-white`;

  return (
    <div>
      <label htmlFor={id} className={flag ? enableBarStyle : disableBarStyle}>
        <div className={flag ? enableBallStyle : disableBallStyle}>
          <div className={flag ? enableIconStyle : disableIconStyle}>
            {icon}
          </div>
        </div>
      </label>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={(e) => toggleFlag(e.target.checked)}
      />
    </div>
  );
};

export default Switch;
