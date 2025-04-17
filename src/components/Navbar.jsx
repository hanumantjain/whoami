import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RandomColorContext } from "../components/RandomColor";

const navLinkBase =
  "text-white px-3 py-2 text-lg font-medium transition-colors hover:[color:var(--primary-color)]";

const Navbar = () => {
  const primaryColor = useContext(RandomColorContext);

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      style={{ "--primary-color": primaryColor }}
    >
      <nav className="backdrop-blur-md rounded-full shadow-lg">
        <div className="px-8 py-4">
          <div className="flex items-center space-x-8">
            <Link to="/about" className={navLinkBase}>
              About Me
            </Link>
            <Link to="/experience" className={navLinkBase}>
              Experience
            </Link>
            <Link to="/projects" className={navLinkBase}>
              Projects
            </Link>
            <Link to="/contact" className={navLinkBase}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
