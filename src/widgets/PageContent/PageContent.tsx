import Navbar from "../Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";

import About from "../../sections/About/About";

import RightBottomGradient from "./../Gradients/RightBottomGradient/RightBottomGradient";
import Processes from './../../sections/Processes/Processes';
import Prices from "@/sections/Prices/Prices";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Processes />
        <Prices />
      </main>
      <footer>
        <RightBottomGradient>
          <div className="px-18 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas
            possimus incidunt facere. Saepe, atque accusamus deserunt voluptas
            ullam obcaecati eum similique optio dicta laboriosam nulla
            reiciendis incidunt odio in!
          </div>
        </RightBottomGradient>
      </footer>
    </div>
  );
};

export default PageContent;
