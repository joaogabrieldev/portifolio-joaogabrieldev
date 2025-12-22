import Navbar from "../Navbar/Navbar";
import Hero from "./../Hero/Hero";
import FooterBackground from "./../FooterBackground/FooterBackground";
import About from "./../About/About";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      <header className="">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
      <footer>
        <FooterBackground>
          <div className="px-18 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas
            possimus incidunt facere. Saepe, atque accusamus deserunt voluptas
            ullam obcaecati eum similique optio dicta laboriosam nulla
            reiciendis incidunt odio in!
          </div>
        </FooterBackground>
      </footer>
    </div>
  );
};

export default PageContent;
