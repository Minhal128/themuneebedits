"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < value ? prev + 1 : value));
    }, 50); // Adjust speed

    return () => clearInterval(interval);
  }, [value]);

  return <motion.span>{count}+</motion.span>;
};

const StatsBanner = () => {
  return (
    <motion.div
      className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-cyan-400 p-6 rounded-2xl shadow-lg text-black max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h2 className="text-3xl font-bold"><Counter value={10} /></motion.h2>
        <p className="text-sm">Years of Experience</p>
      </div>
      <div className="text-center">
        <motion.h2 className="text-3xl font-bold"><Counter value={900} /></motion.h2>
        <p className="text-sm">Satisfied customers</p>
      </div>
      <div className="text-center">
        <motion.h2 className="text-3xl font-bold"><Counter value={99} /></motion.h2>
        <p className="text-sm">Cybersecurity guarantee</p>
      </div>
    </motion.div>
  );
};

export default StatsBanner;
