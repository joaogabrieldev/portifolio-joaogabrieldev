import Lottie from "lottie-react";
import animationData from "../../animations/text-type/text-type.json";

const Animation = () => {
  return (
    <div
      style={{ width: "100%", maxWidth: 1440, margin: "0 auto" }}
      className="border-2 border-white md:w-123"
    >
      <Lottie
        animationData={animationData}
        alt="introduction animation"
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default Animation;
