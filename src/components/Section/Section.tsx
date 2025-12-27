import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  height: "auto" | "screen"
}

const Section = ({ children, className, id, height }: ISectionProps) => {
  return (
    <section
      className={`relative h-${height} border-2 border-white ${className}`}
      id={id}
    >
      {children} 
    </section>
  );
};

export default Section;
