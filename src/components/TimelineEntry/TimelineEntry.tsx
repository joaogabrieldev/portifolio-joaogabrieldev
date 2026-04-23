import type { ReactNode } from "react";

import { dmSans, epilogue } from "@/utils/fonts";

type TimelineItem = {
  period: string;
  title: ReactNode;
  subtitle: string;
  description: string;
};

const TimelineEntry = ({
  period,
  title,
  subtitle,
  description,
}: TimelineItem) => {
  return (
    <div className="">
      <div
        className={`text-xs font-semibold tracking-[0.18em] text-violet-300/90 uppercase ${epilogue.className}`}
      >
        {period}
      </div>
      <h3
        className={`mt-2 text-lg font-semibold text-white ${epilogue.className}`}
      >
        {title}
      </h3>
      <p className={`mt-0.5 text-sm text-white/60 ${dmSans.className}`}>
        {subtitle}
      </p>
      <p
        className={`mt-3 max-w-md text-sm leading-relaxed text-white/70 ${dmSans.className}`}
      >
        {description}
      </p>
    </div>
  );
};

export default TimelineEntry;
