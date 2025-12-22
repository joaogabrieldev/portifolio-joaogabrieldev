import Section from "@/components/Section/Section";
import React from "react";

interface IFooterBackground {
  children: React.ReactNode;
}

const FooterBackground = ({ children }: IFooterBackground) => {
  return (
    <Section className="z-0 bg-linear-to-br from-transparent via-transparent to-[#2e294f]">
      <div className="absolute z-1 flex justify-center">{children}</div>
    </Section>
  );
};

export default FooterBackground;
