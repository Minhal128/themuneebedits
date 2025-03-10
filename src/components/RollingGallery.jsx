// import { useEffect, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useAnimation,
//   useTransform,
// } from "framer-motion";
// // import "../../public/1.jpg"
// const IMGS = [
//   "../../public/1.jpg",
//   "../../public/2.png",
//   "../../public/3.png",
//   "../../public/4.png",
//   "../../public/5.png",
//   "../../public/6.png",
//   "../../public/7.png",
//   "../../public/8.png",
// ];

// const RollingGallery = ({
//   autoplay = true,
//   pauseOnHover = true,
//   images = [],
// }) => {
//   images = images.length > 0 ? images : IMGS;

//   const [isScreenSizeSm, setIsScreenSizeSm] = useState(
//     window.innerWidth <= 640
//   );
//   useEffect(() => {
//     const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 3D geometry
//   const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
//   const faceCount = images.length;
//   const faceWidth = (cylinderWidth / faceCount) * 1.5;
//   const radius = cylinderWidth / (2 * Math.PI);

//   // Framer Motion
//   const dragFactor = 0.05;
//   const rotation = useMotionValue(0);
//   const controls = useAnimation();

//   // Convert rotation -> 3D transform
//   const transform = useTransform(
//     rotation,
//     (val) => `rotate3d(0,1,0,${val}deg)`
//   );

//   const startInfiniteSpin = (startAngle) => {
//     controls.start({
//       rotateY: [startAngle, startAngle - 360],
//       transition: {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const currentAngle = rotation.get();
//       startInfiniteSpin(currentAngle);
//     } else {
//       controls.stop();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [autoplay]);

//   const handleUpdate = (latest) => {
//     if (typeof latest.rotateY === "number") {
//       rotation.set(latest.rotateY);
//     }
//   };

//   const handleDrag = (_, info) => {
//     controls.stop();
//     rotation.set(rotation.get() + info.offset.x * dragFactor);
//   };

//   const handleDragEnd = (_, info) => {
//     const finalAngle = rotation.get() + info.velocity.x * dragFactor;
//     rotation.set(finalAngle);

//     if (autoplay) {
//       startInfiniteSpin(finalAngle);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (autoplay && pauseOnHover) {
//       controls.stop();
//     }
//   };
//   const handleMouseLeave = () => {
//     if (autoplay && pauseOnHover) {
//       const currentAngle = rotation.get();
//       startInfiniteSpin(currentAngle);
//     }
//   };

//   return (
//     <div className="relative h-[300px] w-full overflow-hidden">
//       <div
//         className="absolute top-0 left-0 h-full w-[48px] z-10"
//         style={{
//           background:
//             "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
//         }}
//       />
//       <div
//         className="absolute top-0 right-0 h-full w-[48px] z-10"
//         style={{
//           background:
//             "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
//         }}
//       />

//       <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
//         <motion.div
//           drag="x"
//           dragElastic={0}
//           onDrag={handleDrag}
//           onDragEnd={handleDragEnd}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           animate={controls}
//           onUpdate={handleUpdate}
//           style={{
//             transform: transform,
//             rotateY: rotation,
//             width: cylinderWidth,
//             transformStyle: "preserve-3d",
//           }}
//           className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
//         >
//           {images.map((url, i) => (
//             <div
//               key={i}
//               className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
//               style={{
//                 width: `${faceWidth}px`,
//                 transform: `rotateY(${(360 / faceCount) * i
//                   }deg) translateZ(${radius}px)`,
//               }}
//             >
//               <img
//                 src={url}
//                 alt="gallery"
//                 className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover
//                            transition-transform duration-300 ease-out group-hover:scale-105
//                            sm:h-[100px] sm:w-[220px]"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;


import { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import ReelView from "./ReelView"; // Import ReelView for mobile screens

// Array of video URLs instead of images
const VIDEOS = [
  "/1.mp4",
  "/2.mp4",
  "/3.mp4",
  "/4.mp4",
  "/5.mp4",
  "/6.mp4",
  "/7.mp4",
  "/8.mp4",
];

const RollingGallery = ({
  autoplay = true,
  pauseOnHover = true,
  videos = [],
}) => {
  videos = videos.length > 0 ? videos : VIDEOS;

  // IMPORTANT: All hooks must be called before any conditional returns
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false
  );
  
  // Framer Motion hooks - always declare these regardless of screen size
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );
  
  // Initialize all variables that depend on props
  const cylinderWidth = 1800;
  const faceCount = videos.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.2;
  const radius = cylinderWidth / (2 * Math.PI);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startInfiniteSpin = useCallback((startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    // Only run the animation if we're not on mobile and autoplay is true
    if (autoplay && !isScreenSizeSm) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, controls, rotation, startInfiniteSpin, isScreenSizeSm]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Now that all hooks have been called, we can safely do conditional rendering
  if (isScreenSizeSm) {
    return (
      <div className="mx-auto w-[90%] h-80px max-w-md ">
        <ReelView videos={videos} />
      </div>
    );
  }

  // Desktop view with 3D carousel
  return (
    <div className="relative h-[480px] w-full overflow-hidden mt-9">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {videos.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <video
                src={url}
                className="pointer-events-none h-[480px] w-[270px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-105
                           sm:h-[320px] sm:w-[180px]"
                autoPlay
                loop
                muted
                controls
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
// import { useEffect, useState, useCallback, useRef } from "react";
// import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
// import ReelView from "./ReelView";

// // Array of video URLs instead of images
// const VIDEOS = [
//   "/1.mp4",
//   "/2.mp4",
//   "/3.mp4",
//   "/4.mp4",
//   "/5.mp4",
//   "/6.mp4",
//   "/7.mp4",
//   "/8.mp4",
// ];

// const RollingGallery = ({
//   autoplay = true,
//   pauseOnHover = true,
//   videos = [],
// }) => {
//   videos = videos.length > 0 ? videos : VIDEOS;
//   const videoRefs = useRef([]);
//   const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  
//   // Initialize all hooks at the top level, before any conditionals
//   const cylinderWidth = 1800;
//   const faceCount = videos.length;
//   const faceWidth = (cylinderWidth / faceCount) * 1.2;
//   const radius = cylinderWidth / (2 * Math.PI);
  
//   // Framer Motion hooks - must be called unconditionally
//   const dragFactor = 0.05;
//   const rotation = useMotionValue(0);
//   const controls = useAnimation();
//   const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

//   // Safe window check for SSR
//   useEffect(() => {
//     setIsScreenSizeSm(window.innerWidth <= 640);
//     const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const startInfiniteSpin = useCallback((startAngle) => {
//     controls.start({
//       rotateY: [startAngle, startAngle - 360],
//       transition: {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//   }, [controls]);

//   useEffect(() => {
//     if (autoplay && !isScreenSizeSm) {
//       const currentAngle = rotation.get();
//       startInfiniteSpin(currentAngle);
//     } else {
//       controls.stop();
//     }
//   }, [autoplay, controls, rotation, startInfiniteSpin, isScreenSizeSm]);

//   // Update video visibility based on rotation
//   useEffect(() => {
//     if (isScreenSizeSm) return; // Skip this effect for mobile
    
//     const updateVideoVisibility = () => {
//       const currentRotation = rotation.get() % 360;
      
//       videoRefs.current.forEach((ref, i) => {
//         if (!ref) return;
        
//         const angle = (360 / faceCount) * i;
//         const angleDiff = Math.abs((angle - currentRotation + 180) % 360 - 180);
        
//         // Only play videos that are visible (facing within 90 degrees of front)
//         if (angleDiff < 90) {
//           if (ref.paused) ref.play().catch(() => {});
//         } else {
//           if (!ref.paused) ref.pause();
//         }
//       });
//     };
    
//     const unsubscribe = rotation.onChange(updateVideoVisibility);
//     return () => unsubscribe();
//   }, [rotation, faceCount, isScreenSizeSm]);

//   const handleUpdate = (latest) => {
//     if (typeof latest.rotateY === "number") {
//       rotation.set(latest.rotateY);
//     }
//   };

//   const handleDrag = (_, info) => {
//     controls.stop();
//     rotation.set(rotation.get() + info.offset.x * dragFactor);
//   };

//   const handleDragEnd = (_, info) => {
//     const finalAngle = rotation.get() + info.velocity.x * dragFactor;
//     rotation.set(finalAngle);

//     if (autoplay) {
//       startInfiniteSpin(finalAngle);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (autoplay && pauseOnHover) {
//       controls.stop();
//     }
//   };
  
//   const handleMouseLeave = () => {
//     if (autoplay && pauseOnHover) {
//       const currentAngle = rotation.get();
//       startInfiniteSpin(currentAngle);
//     }
//   };

//   // Conditional rendering after all hooks have been called
//   if (isScreenSizeSm) {
//     return <ReelView videos={videos} />;
//   }

//   // Desktop view with 3D carousel
//   return (
//     <div className="relative h-[480px] w-full overflow-hidden">
//       <div
//         className="absolute top-0 left-0 h-full w-[48px] z-10"
//         style={{
//           background:
//             "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
//         }}
//       />
//       <div
//         className="absolute top-0 right-0 h-full w-[48px] z-10"
//         style={{
//           background:
//             "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
//         }}
//       />

//       <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
//         <motion.div
//           drag="x"
//           dragElastic={0}
//           onDrag={handleDrag}
//           onDragEnd={handleDragEnd}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           animate={controls}
//           onUpdate={handleUpdate}
//           style={{
//             transform: transform,
//             rotateY: rotation,
//             width: cylinderWidth,
//             transformStyle: "preserve-3d",
//           }}
//           className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
//         >
//           {videos.map((url, i) => {
//             const angle = (360 / faceCount) * i;
//             return (
//               <div
//                 key={i}
//                 data-angle={angle}
//                 className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
//                 style={{
//                   width: `${faceWidth}px`,
//                   transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
//                 }}
//               >
//                 <video
//                   ref={el => videoRefs.current[i] = el}
//                   src={url}
//                   className="h-[480px] w-[270px] rounded-[15px] border-[3px] border-white object-cover
//                              transition-transform duration-300 ease-out group-hover:scale-105"
//                   loop
//                   muted
//                   playsInline
//                   controls
//                 />
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;