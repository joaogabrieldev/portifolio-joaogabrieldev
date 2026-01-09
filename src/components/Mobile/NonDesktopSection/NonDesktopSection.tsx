import React from "react";

interface INonDesktopSection {
  children: React.ReactNode;
  className?: string;
  id?: string;
  height: "auto" | "screen";
}

const NonDesktopSection = ({
  children,
  className,
  id,
  height,
}: INonDesktopSection) => {
  return (
    <section
      className={`relative h-${height == "screen" ? "50" : "auto"} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default NonDesktopSection;
