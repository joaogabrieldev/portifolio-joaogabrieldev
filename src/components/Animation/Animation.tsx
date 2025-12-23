import Lottie from "lottie-react";
import animationData from "../../animations/text-type/text-type.json";

const Animation = () => {
  return (
    <div
      style={{ width: "100%", maxWidth: 2560, margin: "0 auto" }}
      className="border-2 border-white"
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
