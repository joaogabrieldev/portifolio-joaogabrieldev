"use client";

import Aurora from "@/components/ReactBits/Aurora/Aurora";
import PageContent from "@/widgets/PageContent/PageContent";

export default function Home() {
  return (
    <div>
      <Aurora
        blend={0.65}
        colorStops={["#413b72", "#342e59", "#0d0d0d"]}
        speed={0.4}
        amplitude={8}
      />

      <PageContent />
    </div>
  );
}
