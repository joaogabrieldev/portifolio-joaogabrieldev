import React from "react";

interface IAcrossGradientProps {
  children: React.ReactNode;
}

const AcrossGradient = ({ children }: IAcrossGradientProps) => {
  return (
    <div className="bg-linear-to-bl from-[#0f172a] via-[#3a3465] to-[#0f172a]">
      {children}
    </div>
  );
};

export default AcrossGradient;
