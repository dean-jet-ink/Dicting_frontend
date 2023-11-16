export type ProgressCircleProps = {
  percent: number;
  content: string;
};

const degs = {
  0: "",
  10: "after:animate-rotate-circle-right-10deg",
  20: "after:animate-rotate-circle-right-20deg",
  30: "after:animate-rotate-circle-right-30deg",
  40: "after:animate-rotate-circle-right-40deg",
  50: "after:animate-rotate-circle-right-50deg",
  60: "after:animate-rotate-circle-right-60deg",
  70: "after:animate-rotate-circle-right-70deg",
  80: "after:animate-rotate-circle-right-80deg",
  90: "after:animate-rotate-circle-right-90deg",
  100: "after:animate-rotate-circle-right-100deg",
  110: "after:animate-rotate-circle-right-110deg",
  120: "after:animate-rotate-circle-right-120deg",
  130: "after:animate-rotate-circle-right-130deg",
  140: "after:animate-rotate-circle-right-140deg",
  150: "after:animate-rotate-circle-right-150deg",
  160: "after:animate-rotate-circle-right-160deg",
  170: "after:animate-rotate-circle-right-170deg",
  180: "after:animate-rotate-circle-right-180deg",
  190: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-10deg",
  200: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-20deg",
  210: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-30deg",
  220: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-40deg",
  230: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-50deg",
  240: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-60deg",
  250: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-70deg",
  260: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-80deg",
  270: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-90deg",
  280: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-100deg",
  290: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-110deg",
  300: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-120deg",
  310: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-130deg",
  320: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-140deg",
  330: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-150deg",
  340: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-160deg",
  350: "after:animate-rotate-circle-right-180deg before:animate-rotate-circle-left-170deg",
  360: "after:bg-amber-300 before:bg-amber-300 bg-transparent",
};

const ProgressCircle = ({ percent, content }: ProgressCircleProps) => {
  let degPer: keyof typeof degs;

  if (percent >= 0.9 && percent < 1) {
    degPer = 350;
  } else {
    degPer = (Math.round((360 * percent) / 10) * 10) as keyof typeof degs;
  }

  const deg = degs[degPer];

  return (
    <div
      className={`relative w-16 h-16 bg-accent rounded-full z-10 overflow-hidden before:content-[''] before:block before:absolute before:top-0 before:-left-8 before:w-16 before:h-16 before:origin-[right_32px] before:z-20 before:bg-subAccent after:content-[''] after:block after:absolute after:top-0 after:-right-8 after:w-16 after:h-16 after:origin-[left_32px] after:z-30 after:bg-subAccent ${deg}`}
    >
      <div className="absolute top-[6px] left-[6px] w-[3.2rem] h-[3.2rem] bg-main rounded-full z-40 text-[10px] flex items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default ProgressCircle;
