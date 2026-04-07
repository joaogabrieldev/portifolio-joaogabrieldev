import Navbar from "../../Navbar/Navbar";
import Hero from "@/layout/Hero";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      {/* <header>
        <Navbar />
      </header> */}
      <main className="min-h-dvh">
        <Hero />
      </main>
    </div>
  );
};

export default PageContent;
