import React, { useContext, useEffect, useState } from "react";
import { RandomColorContext } from "../components/RandomColor";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const navLinkBase =
  "px-3 py-2 text-sm font-medium transition-colors hover:[color:var(--primary-color)]";

const Navbar = () => {
  const primaryColor = useContext(RandomColorContext);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div
        className="fixed top-12 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
        style={{ "--primary-color": primaryColor }}
      >
        <nav className="backdrop-blur-md rounded-full shadow-xl border border-neutral-800">
          <div className="px-8 py-4">
            <div className="flex items-center space-x-8">
              <Link
                to="hanumant jain about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkBase}
              >
                About Me
              </Link>
              <Link
                to="hanumant jain experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkBase}
              >
                Experience
              </Link>
              <Link
                to="hanumant jain projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkBase}
              >
                Projects
              </Link>
              <Link
                to="hanumant jain contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navLinkBase}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={() => setIsDarkMode(!isDarkMode)}
                />
                <span className="text-xs text-foreground">
                  {isDarkMode ? "Dark" : "Light"}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="lg:hidden fixed top-6 right-6 z-50">
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-3xl text-black dark:text-white"
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center h-screen z-50 transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            <IoClose />
          </button>

          <div className="flex flex-col w-full items-center text-center gap-6 text-lg text-white">
            {[
              { label: "About Me", to: "hanumant jain about" },
              { label: "Experience", to: "hanumant jain experience" },
              { label: "Projects", to: "hanumant jain projects" },
              { label: "Contact", to: "hanumant jain contact" },
            ].map((item) => (
              <Link
                key={item.label}
                className="w-1/2 cursor-pointer rounded-2xl p-2 text-2xl bg-[#1a1a1a] hover:bg-red-700 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col text-center gap-3">
            <div className="text-2xl text-white">Get In Touch</div>
            <div className="flex gap-12 justify-center mt-5 text-3xl text-white">
              <a
                href="https://github.com/hanumantjain"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hanumant-jain-621745173"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 pt-10">
            <Switch
              checked={isDarkMode}
              onCheckedChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className="text-sm text-white">
              {isDarkMode ? "Dark" : "Light"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
