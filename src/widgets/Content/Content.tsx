import Noise from "@/components/ReactBits/Noise/Noise";

import PageContent from "@/widgets/PageContent/PageContent";

const Content = () => {
  return (
    <div className="">
      <PageContent />

      <div className="pointer-events-none fixed inset-0 z-50 min-h-screen w-full opacity-40">
        <Noise
          patternSize={100}
          patternScaleX={0.5}
          patternScaleY={0.5}
          patternRefreshInterval={5}
          patternAlpha={40}
        />
      </div>
    </div>
  );
};

export default Content;
