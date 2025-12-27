import Section from "@/components/Section/Section";
import React from "react";

interface IRightBottomGradientProps {
  children: React.ReactNode;
  id?: string
}

const RightBottomGradient = ({ children }: IRightBottomGradientProps) => {
  return (
    <Section height="screen" className="z-0 bg-linear-to-br from-transparent via-transparent to-[#2e294f] ">
      <div className="absolute z-1 flex justify-center">{children}</div>
    </Section>
  );
};

export default RightBottomGradient;

