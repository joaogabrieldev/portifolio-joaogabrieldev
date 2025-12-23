import Noise from "@/components/ReactBits/Noise/Noise";

import PageContent from "@/widgets/PageContent/PageContent";

const Content = () => {
  return (
    <div className="">
      <div className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-50">
        <Noise
          patternSize={500}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={5}
          patternAlpha={10}
        />
      </div>

      <PageContent />
    </div>
  );
};

export default Content;
