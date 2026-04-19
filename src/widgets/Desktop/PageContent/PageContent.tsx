import SectionsHeader from "@/components/SectionsHeader/SectionsHeader";
import Hero from "@/layout/Hero";
import SiteSections from "@/widgets/Desktop/SiteSections/SiteSections";

const PageContent = () => {
  return (
    <div className="relative z-10 min-h-dvh w-full">
      {/* <header>
        <Navbar />
      </header> */}
      <main className="min-h-dvh">
        <Hero />
        <SectionsHeader />
        <SiteSections />
      </main>
    </div>
  );
};

export default PageContent;
