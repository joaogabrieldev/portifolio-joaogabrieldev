import Aurora from "@/components/ReactBits/Aurora/Aurora";
import Content from "@/widgets/Content/Content";

const DesktopPageContent = () => {
  return (
    <div className="">
      <Aurora
        blend={0.65}
        colorStops={["#413b72", "#342e59", "#0d0d0d"]}
        speed={0.4}
        amplitude={8}
      />
      <Content />
    </div>
  );
};

export default DesktopPageContent;
