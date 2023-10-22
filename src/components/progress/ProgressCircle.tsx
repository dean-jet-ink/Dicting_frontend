export type ProgressCircleProps = {
  percent: number;
  content: string;
};

const degs = {
  0: "after:rotate-[0deg]",
  10: "after:rotate-[10deg]",
  20: "after:rotate-[20deg]",
  30: "after:rotate-[30deg]",
  40: "after:rotate-[40deg]",
  50: "after:rotate-[50deg]",
  60: "after:rotate-[60deg]",
  70: "after:rotate-[70deg]",
  80: "after:rotate-[80deg]",
  90: "after:rotate-[90deg]",
  100: "after:rotate-[100deg]",
  110: "after:rotate-[110deg]",
  120: "after:rotate-[120deg]",
  130: "after:rotate-[130deg]",
  140: "after:rotate-[140deg]",
  150: "after:rotate-[150deg]",
  160: "after:rotate-[160deg]",
  170: "after:rotate-[170deg]",
  180: "after:rotate-[180deg]",
  190: "after:rotate-[190deg]",
  200: "after:rotate-[200deg]",
  210: "after:rotate-[210deg]",
  220: "after:rotate-[220deg]",
  230: "after:rotate-[230deg]",
  240: "after:rotate-[240deg]",
  250: "after:rotate-[250deg]",
  260: "after:rotate-[260deg]",
  270: "after:rotate-[270deg]",
  280: "after:rotate-[280deg]",
  290: "after:rotate-[290deg]",
  300: "after:rotate-[300deg]",
  310: "after:rotate-[310deg]",
  320: "after:rotate-[320deg]",
  330: "after:rotate-[330deg]",
  340: "after:rotate-[340deg]",
  350: "after:rotate-[350deg]",
};

const ProgressCircle = ({ percent, content }: ProgressCircleProps) => {
  const degPer = Math.round((360 * percent) / 10) * 10;

  let rotateRightCircleColor = "bg-subAccent";
  if (degPer > 180) rotateRightCircleColor = "bg-accent";

  const deg = degs[degPer];

  return (
    <div
      className={`relative w-16 h-16 bg-accent rounded-full z-10 overflow-hidden before:content-[''] before:block before:absolute before:top-0 before:-left-8 before:w-16 before:h-16 before:bg-subAccent before:z-20 after:content-[''] after:block after:absolute after:top-0 after:-right-8 after:w-16 after:h-16 after:bg-subAccent after:origin-[left_32px] after:z-30 after:transition-all after:duration-300 ${deg}`}
    >
      <div className="absolute top-[6px] left-[6px] w-[3.2rem] h-[3.2rem] bg-main rounded-full z-40 text-[10px] flex items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default ProgressCircle;
