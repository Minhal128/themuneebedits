import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReelView = ({ videos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const videoRef = useRef(null);
  
  // Auto-advance functionality (optional)
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    // Reset video when changing to a new one
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (autoplay) videoRef.current.play();
    }
  }, [currentIndex, autoplay]);
  
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };
  
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };
  
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25
      }
    },
    exit: (direction) => ({
      y: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    })
  };
  
  // Progress bar calculation
  const progressPercentage = ((currentIndex + 1) / videos.length) * 100;
  
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 z-20 bg-black/30 rounded-full p-3 text-white"
        aria-label="Previous video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 z-20 bg-black/30 rounded-full p-3 text-white"
        aria-label="Next video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      
      {/* Video counter */}
      <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
        <div className="bg-black/50 text-white px-4 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {videos.length}
        </div>
      </div>
      
      {/* Progress bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div> */}
      
      {/* Autoplay toggle */}
      {/* <button 
        onClick={() => setAutoplay(!autoplay)} 
        className={`absolute bottom-6 right-6 z-20 rounded-full p-2 ${autoplay ? 'bg-white text-black' : 'bg-black/50 text-white'}`}
        aria-label={autoplay ? "Pause autoplay" : "Enable autoplay"}
      >
        {autoplay ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button> */}
      
      {/* Main video content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-80px max-w-3xl mx-auto border-4 border-white rounded-xl p-3 overflow:hidden shadow-lg">
            <video
              ref={videoRef}
              src={videos[currentIndex]}
              className="w-full h-full object-cover"
              autoPlay={autoplay}
              loop
              muted
              playsInline
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                  } else {
                    videoRef.current.pause();
                  }
                }
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Swipe indicators */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 -translate-y-1/2 z-10" 
           onClick={goToPrevious} />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 -translate-y-1/2 z-10" 
           onClick={goToNext} />
    </div>
  );
};

export default ReelView;