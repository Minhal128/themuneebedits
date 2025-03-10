"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
// import { Image } from "@unpic/react";
// import { cn } from "./utlis";

export const Testimonial = () => {
  // Testimonial data array
  const testimonials = [
    {
      id: 1,
      text: "He's probably the best editor I've worked with since he really gets what it takes to make a good edit! Will definitely be working with him again!",
      author: "Alfredo Cahero",
      position: "Writer & Influencer",
      image: "/92.jpg" // Assuming image is in public folder
    },
    {
      id: 2,
      text: "Muneeb Ahmed truly EXCEEDED my expectations with his video editing skills, paying great ATTENTION TO DETAILS and delivering top-notch storytelling. Working with him was a breeze, thanks to his deep understanding and quick responsiveness. Highly recommend! 😊",
      author: " Drew Barness",
      position: "Content Creator",
      image: "/135.png" // Replace with actual image
    },
    {
      id: 3,
      text: "Excellent! Great quality, love the motion graphics, overlays, and comedic elements. Muneeb is super responsive and timely.",
      author: "Dyllen Nellis",
      position: "Musical artist",
      image: "/110.jpg" // Replace with actual image
    },
    {
      id: 4,
      text: "Normally most people don’t get it right the first time and I’m impressed with his work. Thank you very much! Will be a repeat customer",
      author: "Kandy Robertson",
      position: "Instagram Influencer",
      image: "/128.jpg" // Replace with actual image
    }
  ];

  // State for tracking current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to navigate testimonials
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 3000);
    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white dark:bg-transparent" id="testimonial">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 relative">
        {/* Navigation arrows - hidden on small screens, visible on md and up */}
        <button 
          onClick={prevTestimonial}
          className="hidden md:block absolute left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 p-1 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <IconArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="hidden md:block absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 p-1 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <IconArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
        </button>

        <AnimatePresence mode="wait">
          <motion.figure 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-screen-md mx-auto"
          >
            <svg
              className="h-8 md:h-10 lg:h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-white">
                {currentTestimonial.text}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-4 md:mt-6 space-x-2 md:space-x-3">
              <img
                className="w-5 h-5 md:w-6 md:h-6 rounded-full"
                src={currentTestimonial.image}
                alt={`${currentTestimonial.author} profile picture`}
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-2 md:pr-3 font-medium text-gray-900 dark:text-white text-sm md:text-base">
                  {currentTestimonial.author}
                </div>
                <div className="pl-2 md:pl-3 text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
                  {currentTestimonial.position}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Indicator dots - responsive sizing and spacing */}
        <div className="hidden md:flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "w-4 md:w-6 bg-cyan-600" 
                  : "w-1.5 md:w-2 bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;