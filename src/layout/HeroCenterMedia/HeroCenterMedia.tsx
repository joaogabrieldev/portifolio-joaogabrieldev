import { motion } from "framer-motion";

const HERO_IMAGE_SRC = "/assets/images/hero-2-alpha_b&w.png";
const HERO_IMAGE_ALT = "Minimalist Hero";

const HeroCenterMedia = () => (
  <div className="relative order-1 flex h-full items-center justify-center md:order-2">
    <div className="absolute z-0 h-[60vw] max-h-[560px] min-h-[300px] w-[98vw] max-w-[960px] min-w-[360px] md:h-[56vw] md:max-h-[700px] md:w-[84vw] md:max-w-[1180px] lg:h-[50vw] lg:max-h-[820px] lg:w-screen lg:max-w-[1820px]">
      <motion.video
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="h-full w-full object-contain"
        style={{ backgroundColor: "transparent" }}
        src="/assets/animations/sunrise.webm"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
    <motion.img
      src={HERO_IMAGE_SRC}
      alt={HERO_IMAGE_ALT}
      className="relative z-10 h-auto w-[400px] scale-200 top-3 object-cover md:w-[560px] lg:w-[700px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src =
          "https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found";
      }}
    />
  </div>
);

export default HeroCenterMedia;
