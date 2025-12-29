import React from "react";

interface IAcrossGradientProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  sectionHeight: "auto" | "screen";
}

const AcrossGradient = ({
  children,
  id,
  className,
  sectionHeight,
}: IAcrossGradientProps) => {
  return (
    <div
      id={id}
      className={`bg-linear-to-bl from-[#0f172a] via-[#3a3465] to-[#0f172a] ${className}`}
    >
      {children}
    </div>
  );
};

export default AcrossGradient;
