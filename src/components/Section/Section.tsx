import React from "react";

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
