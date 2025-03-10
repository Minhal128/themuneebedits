import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../components/portfolio.css";

export default function Responsive({
  className = "Bouncy",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  easeType = "power2.out",
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({ repeat: -1 });
      images.forEach((_, idx) => {
        tl.fromTo(
          `.card-${idx}`,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.5, ease: easeType }
        ).to(`.card-${idx}`, { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });
      });
      return () => tl.kill();
    }
  }, [easeType, images, isMobile]);

  return (
    <div
      className={`Bouncy relative flex items-center justify-center ${className} mx-auto`}
      style={{
        width: isMobile ? containerWidth * 0.6 : containerWidth,
        height: isMobile ? containerHeight * 0.6 : containerHeight,
      }}
    >
      {images.length === 0 ? (
        <p className="text-white">No images available</p>
      ) : (
        images.map((src, idx) => (
          <div
            key={idx}
            className={`Bouncy card card-${idx} mt-4 absolute w-[200px] aspect-square border-4 border-white rounded-[20px] overflow-hidden flex items-center justify-center`}
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              opacity: 0,
              transform: isMobile ? "none" : "rotate(5deg)",
            }}
          >
            <img className="w-full h-full object-cover Bouncy" src={src} alt={`card-${idx}`} />
          </div>
        ))
      )}
    </div>
  );
}
