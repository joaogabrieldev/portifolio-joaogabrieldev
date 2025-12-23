import React from "react";
import Noise from "../ReactBits/Noise/Noise";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: ISectionProps) => {
  return (
    <section className={`relative h-screen border-2 border-white ${className}`}>
      
      {children}
    </section>
  );
};

export default Section;
