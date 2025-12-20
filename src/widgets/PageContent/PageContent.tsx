
import Navbar from "../Navbar/Navbar";
import Hero from "./../Hero/Hero";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      <header className="">
        <Navbar />
      </header>
      <main className="mt-20">
        <Hero />
        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          provident iusto voluptas autem quas dolorum, laudantium natus quos
          voluptatum temporibus aut quam minus consequuntur inventore nam fugit.
          Debitis, iure recusandae. Culpa, fugiat aliquam minima aliquid dolor
          exercitationem amet perferendis distinctio voluptas labore vitae
          itaque necessitatibus quasi quod nulla, ipsum non! Sunt, corrupti?
          Perspiciatis fugiat velit dignissimos. Porro alias dolore architecto.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          ipsam a repellendus perspiciatis perferendis, molestiae, minus
          doloribus tempore ullam beatae soluta sunt odit necessitatibus debitis
          illo consequuntur. Praesentium, facilis vitae.
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default PageContent;
