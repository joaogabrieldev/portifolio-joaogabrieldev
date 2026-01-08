import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  height: "auto" | "screen";
}

const Section = ({ children, className, id, height }: ISectionProps) => {
  return (
    <section className={`relative h-${height} ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
