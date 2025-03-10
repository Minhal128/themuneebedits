import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import "../navbar.css";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[hsla(0,0%,4%,1)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="absolute top-4 left-4">
            <img src="/portfolio.png" alt="logo" className="h-12" />
          </a>

          <div className="hidden md:flex items-center justify-center space-x-8 mx-auto">
            {["#home", "#about", "#projects", "#testimonial", "#contact"].map(
              (href, index) => (
                <a
                  key={index}
                  href={href}
                  onClick={() => setActive(href)}
                  className={`relative text-lg transition-colors duration-300 ${
                    active === href ? "text-white" : "text-cyan-400"
                  } hover:text-white`}
                >
                  {href.replace("#", "").charAt(0).toUpperCase() +
                    href.slice(2)}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 transition-all duration-300 ${
                      active === href
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              )
            )}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              {
                Icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/muneeb-ahmed-7625a7229/",
                label: "LinkedIn",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/muneebmakeshit",
                label: "Instagram",
              },
              {
                Icon: FaTwitter,
                href: "https://x.com/muneebmas04",
                label: "Twitter",
              },
              {
                Icon: FaEnvelope,
                href: "mailto:muneebmas04@gmail.com",
                label: "Email",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className=" absolute top-4 right-4 md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-black transition-all duration-300 md:hidden ${
            menuOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6 py-6">
            {["#home", "#about", "#projects", "#testimonial", "#contact"].map(
              (href, index) => (
                <li key={index}>
                  <a
                    href={href}
                    onClick={() => {
                      setActive(href);
                      setMenuOpen(false);
                    }}
                    className="text-white text-lg hover:text-cyan-400 transition-all"
                  >
                    {href.replace("#", "").charAt(0).toUpperCase() +
                      href.slice(2)}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Social Icons (Mobile) */}
          {/* <div className="flex justify-center space-x-6 pb-6">
              {[FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope].map((Icon, index) => (
                <a key={index} href="#" className="text-white hover:text-cyan-400 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div> */}
        </div>
      </div>
    </nav>
  );
};
