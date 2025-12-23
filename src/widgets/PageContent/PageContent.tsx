import Navbar from "../Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import FooterBackground from "./../FooterBackground/FooterBackground";
import About from "../../sections/About/About";

import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <GradualBlur 
      target="page"
      position="bottom"
      height="8rem"
      strength={3}
      divCount={5}
      curve="bezier"
      exponential={true}
      opacity={1}/>
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
