import React from "react";
import Navbar from "../../Navbar/Navbar";
import Aurora from "@/components/ReactBits/Aurora/Aurora";
import MobileContent from "../NonDesktopContent/NonDesktopContent";

const NonDesktopPageContent = () => {
  return (
    <div>
      <Aurora
        blend={0.65}
        colorStops={["#413b72", "#342e59", "#0d0d0d"]}
        speed={0.4}
        amplitude={8}
      />
      <MobileContent />
    </div>
  );
};

export default NonDesktopPageContent;
