"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import DesktopPageContent from "@/widgets/Desktop/DesktopPageContent/DesktopPageContent";
import MobilePageContent from "@/widgets/Mobile/NonDesktopPageContent/NonDesktopPageContent";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div>{width >= 1024 ? <DesktopPageContent /> : <MobilePageContent />}</div>
  );
}
