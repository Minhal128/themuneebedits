// import { FaBriefcase, FaChartLine, FaTools } from "react-icons/fa";
// import "../about.css";

// const TimelineWithIcons = () => {
//   return (
//     <div className="w-[40rem] mx-auto relative">
//       {/* Centered Timeline Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400"></div>

//       {/* Timeline Item 1 - Work (Fiverr) */}
//       <div className="mb-12 flex items-center md:justify-start justify-center flex-wrap md:flex-nowrap">
//         {/* Icon - Moves before heading in responsive mode */}
//         <div className="relative flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full md:ml-6 md:order-last order-first mb-2 md:mb-0">
//           <FaBriefcase size={24} />
//         </div>
//         <div className="w-1/2 md:text-right text-center px-4 md:pl-12 pr-4">
//           <h3 className="text-lg font-semibold text-cyan-400 mb-2">
//             Work on Fiverr
//           </h3>
//           <p className="text-sm italic text-gray-600 mb-2">
//             Nov 2021 - Present
//           </p>
//           <p className="text-white responsive-paragraph">
//             Worked as a videographer on Fiverr for 4 years, providing
//             high-quality video production, editing, and cinematography services
//             using After Effects, Premiere Pro, Photoshop, and Audition for
//             diverse clients and projects.
//           </p>
//         </div>
//       </div>

//       {/* Timeline Item 2 - Progress (Upwork) */}
//       <div className="mb-12 flex items-center md:justify-end justify-center flex-wrap md:flex-nowrap">
//         {/* Icon - Moves before heading in responsive mode */}
//         <div className="relative flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full md:mr-6 md:order-none order-first mb-2 md:mb-0">
//           <FaChartLine size={24} />
//         </div>
//         <div className="w-1/2 md:text-left text-center px-4 md:pr-12 pl-4">
//           <h3 className="text-lg font-semibold text-cyan-400 mb-2">
//             Leveling Up on Upwork
//           </h3>
//           <p className="text-sm italic text-gray-600 mb-2">
//             Oct 2022 - Present
//           </p>
//           <p className="text-white ">
//             Worked on Upwork for the past 2 years, focusing on enhancing skills
//             and delivering quality services. Continuously improving expertise
//             and expanding reach to new clients, utilizing After Effects,
//             Premiere Pro, Photoshop, and Audition for professional video editing
//             and design.
//           </p>
//         </div>
//       </div>

//       {/* Timeline Item 3 - Tools (Adobe Premiere Pro) */}
//       <div className="mb-12 flex items-center md:justify-start justify-center flex-wrap md:flex-nowrap">
//         {/* Icon - Moves before heading in responsive mode */}
//         <div className="relative flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full md:ml-6 md:order-last order-first mb-2 md:mb-0">
//           <FaTools size={24} />
//         </div>
//         <div className="w-1/2 md:text-right text-center px-4 md:pl-12 pr-4">
//           <h3 className="text-lg font-semibold text-cyan-400 mb-2">
//             Local Agency
//           </h3>
//           <p className="text-sm italic text-gray-600 mb-2">
//             Aug 2020 - Oct 2020
//           </p>
//           <p className="text-white paragraph-responsive">
//             Experienced in video editing, thumbnails, and Adobe Premiere Pro.
//             Worked in a local agency, creating high-quality content for diverse
//             clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimelineWithIcons;


import React, { useState, useEffect } from "react";
import { FaBriefcase, FaChartLine, FaTools } from "react-icons/fa";
import "../about.css";

// Custom hook to track window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
};

const TimelineWithIcons = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  // Mobile layout
  const mobileLayout = (
    <div className="w-full max-w-[40rem] mx-auto relative timeline-container">
      {/* Centered Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400 md:block hidden"></div>

      {/* Timeline Item 1 - Work (Fiverr) */}
      <div className="timeline-item">
        <div className="icon-container bg-blue-500">
          <FaBriefcase size={24} />
        </div>
        <div className="timeline-content">
          <h3>Work on Fiverr</h3>
          <p className="date">Nov 2021 - Present</p>
          <p className="paragraph-responsive">
            Worked as a videographer on Fiverr for 4 years, providing high-quality video 
            production, editing, and cinematography services using After Effects, Premiere 
            Pro, Photoshop, and Audition for diverse clients and projects.
          </p>
        </div>
      </div>

      {/* Timeline Item 2 - Progress (Upwork) */}
      <div className="timeline-item">
        <div className="icon-container bg-green-500">
          <FaChartLine size={24} />
        </div>
        <div className="timeline-content">
          <h3>Leveling Up on Upwork</h3>
          <p className="date">Oct 2022 - Present</p>
          <p className="paragraph-responsive">
            Worked on Upwork for the past 2 years, focusing on enhancing skills and delivering 
            quality services. Continuously improving expertise and expanding reach to new clients, 
            utilizing After Effects, Premiere Pro, Photoshop, and Audition for professional 
            video editing and design.
          </p>
        </div>
      </div>

      {/* Timeline Item 3 - Tools (Adobe Premiere Pro) */}
      <div className="timeline-item">
        <div className="icon-container bg-yellow-500">
          <FaTools size={24} />
        </div>
        <div className="timeline-content">
          <h3>Local Agency</h3>
          <p className="date">Aug 2020 - Oct 2020</p>
          <p className="paragraph-responsive">
            Experienced in video editing, thumbnails, and Adobe Premiere Pro. Worked in a local 
            agency, creating high-quality content for diverse clients.
          </p>
        </div>
      </div>
    </div>
  );
  
  // Desktop layout
  const desktopLayout = (
    <div className="w-[40rem] mx-auto relative">
      {/* Centered Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400"></div>

      {/* Timeline Item 1 - Work (Fiverr) */}
      <div className="mb-12 flex items-center md:justify-start justify-center flex-wrap md:flex-nowrap">
        {/* Icon - Moves before heading in responsive mode */}
        <div className="relative flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full md:ml-6 md:order-last order-first mb-2 md:mb-0">
          <FaBriefcase size={24} />
        </div>
        <div className="w-1/2 md:text-right text-center px-4 md:pl-12 pr-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Work on Fiverr
          </h3>
          <p className="text-sm italic text-gray-600 mb-2">
            Nov 2021 - Present
          </p>
          <p className="text-white responsive-paragraph">
            Worked as a videographer on Fiverr for 4 years, providing
            high-quality video production, editing, and cinematography services
            using After Effects, Premiere Pro, Photoshop, and Audition for
            diverse clients and projects.
          </p>
        </div>
      </div>

      {/* Timeline Item 2 - Progress (Upwork) */}
      <div className="mb-12 flex items-center md:justify-end justify-center flex-wrap md:flex-nowrap">
        {/* Icon - Moves before heading in responsive mode */}
        <div className="relative flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full md:mr-6 md:order-none order-first mb-2 md:mb-0">
          <FaChartLine size={24} />
        </div>
        <div className="w-1/2 md:text-left text-center px-4 md:pr-12 pl-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Leveling Up on Upwork
          </h3>
          <p className="text-sm italic text-gray-600 mb-2">
            Oct 2022 - Present
          </p>
          <p className="text-white responsive-paragraph">
            Worked on Upwork for the past 2 years, focusing on enhancing skills
            and delivering quality services. Continuously improving expertise
            and expanding reach to new clients, utilizing After Effects,
            Premiere Pro, Photoshop, and Audition for professional video editing
            and design.
          </p>
        </div>
      </div>

      {/* Timeline Item 3 - Tools (Adobe Premiere Pro) */}
      <div className="mb-12 flex items-center md:justify-start justify-center flex-wrap md:flex-nowrap">
        {/* Icon - Moves before heading in responsive mode */}
        <div className="relative flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full md:ml-6 md:order-last order-first mb-2 md:mb-0">
          <FaTools size={24} />
        </div>
        <div className="w-1/2 md:text-right text-center px-4 md:pl-12 pr-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Local Agency
          </h3>
          <p className="text-sm italic text-gray-600 mb-2">
            Aug 2020 - Oct 2020
          </p>
          <p className="text-white paragraph-responsive">
            Experienced in video editing, thumbnails, and Adobe Premiere Pro.
            Worked in a local agency, creating high-quality content for diverse
            clients.
          </p>
        </div>
      </div>
    </div>
  );

  return isMobile ? mobileLayout : desktopLayout;
};

export default TimelineWithIcons;