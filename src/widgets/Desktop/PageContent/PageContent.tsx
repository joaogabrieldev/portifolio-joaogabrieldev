import Navbar from "../../Navbar/Navbar";
import { MinimalistHero } from "@/components/21st/minimalist-hero";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      {/* <header>
        <Navbar />
      </header> */}
      <main className="min-h-dvh ">
        <MinimalistHero />
      </main>
    </div>
  );
};

export default PageContent;
