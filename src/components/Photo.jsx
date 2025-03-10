import { motion as Motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
      {/* Glowing Animated Border */}
      <Motion.div
        className="absolute w-full h-full rounded-full border-[6px] border-transparent bg-gradient-to-r from-cyan-400 to-blue-600 blur-md"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      {/* Image Container */}
      <div className="relative w-[230px] h-[230px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-xl border-4 border-cyan-400">
        <img src="./public/web.jpg" alt="profile" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default Photo;
