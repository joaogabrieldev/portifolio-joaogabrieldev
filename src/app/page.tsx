"use client";

import Aurora from "@/components/ReactBits/Aurora/Aurora";
import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";
import Content from "@/widgets/Content/Content";

export default function Home() {
  return (
    <div>
      {/* <Aurora
        blend={0.65}
        colorStops={["#413b72", "#342e59", "#0d0d0d"]}
        speed={0.4}
        amplitude={8}
      /> */}
      <Content />
      {/* <GradualBlur
        position="bottom"
        strength={3}
        height="250px"
        width="100vw"
        className="hidden md:block"
      /> */}
    </div>
  );
}
