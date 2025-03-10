import { RevealOnScroll } from "../RevealOnScroll";
import RotatingText from "../RotatingText";
import RollingGallery from "../RollingGallery";
import TrueFocus from "../TrueFocus";
// import ReelsCarousel from '../ReelsCarousel';
import BounceCards from "../BounceCards";
import "../portfolio.css";
export const Projects = () => {
  const images = [
    "/1.jpg",
    "/2.png",
    // "../../public/3.png",
    "/4.png",
    // "../../public/5.png",
    "/6.png",
    // "../../public/7.png",
    "/8.png"
    
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 mt-1 text-center">
          {/* Rotating Header */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-cyan-400 text-center flex justify-center items-center">
            <span className="text-white">View My</span>
            <span>
              <RotatingText
                texts={[" Projects", " Work", " Portfolio"]}
                rotationInterval={3000}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 para">
            Collaborating with businesses and individuals to bring ideas to
            life.
          </p>
          {/* Centered Text */}
          <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8"></div>
          {/* Rolling Gallery */}
        <BounceCards
            className="custom-bounceCards Bouncy"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
          <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 mt-30"></div>
          <TrueFocus />
          <RollingGallery rotationInterval={1000} />
        </div>
      </RevealOnScroll>
    </section>
  );
};
