import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
// import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Portfolio";
import { Contact } from "./components/sections/Contact";
// import StatsBanner from './components/StatsBanner';
// import ScrollVelocity from  './components/';
import ScrollVelocity from "./components/ScrollVelocity";
import AnimatedTestimonials from "./components/sections/Testimonial";
import MobileView from "./components/MobileMenu";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const velocity = 100; // Define the velocity variable

  return (
    <>
      <MobileView>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
          <Home />
          <ScrollVelocity
            texts={["themuneebedits", "themuneebedits"]}
            velocity={velocity}
            className="custom-scroll-text mobile"
          />
          <About />
          <Projects />
          <AnimatedTestimonials  />
          <Contact className="mt-5" />
        </div>
      </MobileView>
    </>
  );
}

export default App;
