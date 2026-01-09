"use client";

import DesktopPageContent from "@/widgets/Desktop/DesktopPageContent/DesktopPageContent";
import MobilePageContent from "@/widgets/Mobile/NonDesktopPageContent/NonDesktopPageContent";

export default function Home() {
  return (
    <div>
      {/* <MobilePageContent /> */}
      <DesktopPageContent />
    </div>
  );
}
