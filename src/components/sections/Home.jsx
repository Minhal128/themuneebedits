import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
// import { Photo } from "../Photo";
import { motion } from "framer-motion";
import "../Home.css";

export const Home = () => {
  const words = ["Memories", "Montages", "Reels"];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      return window.innerWidth < 768; // Standard mobile breakpoint
    };
    
    // Set initial value
    setIsMobile(checkIfMobile());
    
    // Update on resize
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  // Mobile layout
  if (isMobile) {
    return (
      <section id="home" className="relative w-full min-h-screen px-4 py-16 flex flex-col items-center">
        <RevealOnScroll>
          <div className="text-center z-10">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold mb-4 mt-10">
              <span className="text-white Res">Hi, I'm</span>
              <span className="text-cyan-400 Res2"> Muneeb</span>
            </h1>

            {/* Simplified Animated Text for Mobile */}
            <div className="text-xl text-white mt-4 font-['oswald']">
              I create{" "}
              <span className="relative inline-block">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 right-0 transition-all duration-700 ease-in-out ${
                      i === index
                        ? "opacity-100 transform-none"
                        : "opacity-0 translate-y-3"
                    }`}
                    style={{ color: "#e3a771" }}
                  >
                    {word}
                  </span>
                ))}
                <span className="opacity-0">{words[0]}</span> {/* Maintains height */}
              </span>
            </div>

            <div className="mt-6 px-1">
              <p className="text-gray-400 text-m mb-5">
                I'm a passionate video editor who loves turning raw footage into
                engaging stories. I edit videos and reels that tell real stories.
                I work with brands and creators to capture their vision and bring
                it to life.
              </p>
            </div>
            
            {/* Profile Image - Moved to middle position */}
            <div className="relative w-[180px] h-[180px] mx-auto my-8">
              {/* Glowing Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-[6px] border-cyan-400 blur-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-3 border-cyan-400 flex items-center justify-center">
                <img
                  src="/web.png"
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="#projects"
                className="bg-cyan-400 text-white py-2.5 px-5 rounded font-medium active:bg-cyan-500 transition-all BtnRes1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-cyan-400  text-cyan-400 py-2.5 px-5 rounded font-medium active:bg-blue-500/20 transition-all BtnRes2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
  }
  // Original desktop layout
  return (
    <section id="home" className="relative w-full h-screen p-[85px] pt-40">
      <RevealOnScroll>
        <div className="absolute top-10 left-10 text-left z-10">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mx-3 home">
            <span className="text-white Res">Hi, I'm</span>
            <span className="text-cyan-400 Res2"> Muneeb</span>
          </h1>

          {/* Subheading with Animated Text */}
          <div className="text-3xl text-white mt-12 mx-3  font-['oswald']">
            I create{" "}
            <span className="relative inline-block h-6 ">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`relative left-0 mx-3 top-0 w-full transition-all duration-1000 ease-in-out ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : i === (index + 1) % words.length
                      ? "opacity-40 translate-y-10"
                      : "opacity-15 translate-y-19"
                  }`}
                  style={{ color: "#e3a771" }} // ✅ Move style here
                >
                  {word}
                </span>
              ))}
            </span>
          </div>
          <div className="mt-5 mx-3">
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a passionate video editor who loves turning raw footage into
              engaging stories. I edit videos and reels that tell real stories.
              I work with brands and creators to capture their vision and bring
              it to life.
            </p>
          </div>

          <div className="flex space-x-4 mt-6 justify-center md:justify-start mx-3">
            <a
              href="#projects"
              className="bg-cyan-400 text-white py-3 px-6 rounded font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg BtnRes1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-500/10 BtnRes2"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="absolute top-7 left-240 w-[320px] h-[320px] md:w-[350px] md:h-[350px]">
          {/* Glowing Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-full border-[10px] border-cyan-400 blur-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />

          {/* Image Container */}
          <div className="relative w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-xl border-4 border-cyan-400 flex items-center justify-center">
            <img
              src="/web.png" // ✅ Corrected image path
              alt="profile"
              className="w-75px h-75px object-cover rounded-full"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
// import { useState, useEffect } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import { motion } from "framer-motion";

// export const Home = () => {
//   const words = ["Memories", "Montages", "Reels"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:flex-row md:justify-between md:px-20">
//       <RevealOnScroll>
//         {/* Left Section - Text */}
//         <div className="text-center md:text-left md:w-1/2">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="text-white">Hi, I'm</span>
//             <span className="text-cyan-400"> Muneeb</span>
//           </h1>

//           {/* Animated Text */}
//           <div className="text-3xl text-white mt-6">
//             I create{" "}
//             <span className="relative inline-block h-6">
//               {words.map((word, i) => (
//                 <span
//                   key={i}
//                   className={`absolute left-0 mx-3 top-0 w-full transition-all duration-1000 ease-in-out
//                     ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//                   style={{ color: "#e3a771" }}
//                 >
//                   {word}
//                 </span>
//               ))}
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-400 text-lg mt-5 max-w-lg mx-auto md:mx-0">
//             I’m a passionate video editor who loves turning raw footage into engaging stories. I work with brands and creators to capture their vision and bring it to life.
//           </p>

//           {/* Buttons */}

//         </div>

//         {/* Right Section - Image */}
//         <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] mt-10 md:mt-0 mx-auto">
//           {/* Glowing Animated Border */}
//           <motion.div
//             className="absolute w-full h-full rounded-full border-[6px] border-transparent bg-gradient-to-r from-cyan-400 to-blue-600 blur-md"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//           />

//           {/* Image Container */}
//           <div className="relative w-[230px] h-[230px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl border-4 border-cyan-400">
//             <img
//               src="/web.png"
//               alt="profile"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
