"use client";

import { motion } from "framer-motion";

type SkillProgressBarProps = {
  value: number;
  className?: string;
  /** Atraso em segundos antes do preenchimento (útil para escalonar várias barras). */
  delay?: number;
};

export function SkillProgressBar({
  value,
  className,
  delay = 0,
}: SkillProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={[
        "h-2 w-full overflow-hidden rounded-full bg-white/10",
        className ?? "",
      ].join(" ")}
    >
      <motion.div
        className="h-full max-w-full rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-violet-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${clamped}%` }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{
          width: {
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      />
    </div>
  );
}
