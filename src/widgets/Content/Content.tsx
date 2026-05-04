import Noise from "@/components/ReactBits/Noise/Noise";

import PageContent from "@/widgets/Desktop/PageContent/PageContent";

const Content = () => {
  return (
    <div className="relative min-h-dvh w-full">
      <PageContent />

      <div className="pointer-events-none fixed inset-0 z-50 min-h-screen w-full opacity-40">
        <Noise
          patternSize={100}
          patternScaleX={0.4}
          patternScaleY={0.4}
          patternRefreshInterval={5}
          patternAlpha={50}
        />
      </div>
    </div>
  );
};

export default Content;
