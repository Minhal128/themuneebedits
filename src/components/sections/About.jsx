import { RevealOnScroll } from "../RevealOnScroll";
import TimelineWithIcon from "../Timeline"; // ✅ Correct Import

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20  "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 dark:text-white text-black">
            <span className="text-white">Passion to </span>
            <span className="text-cyan-400">Profession</span>
          </h2>
          <TimelineWithIcon /> {/* ✅ Correct Component */}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
