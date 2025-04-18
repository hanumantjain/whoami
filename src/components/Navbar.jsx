import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RandomColorContext } from "../components/RandomColor";
import { Switch } from "@/components/ui/switch";

const navLinkBase =
  "px-3 py-2 text-sm font-medium transition-colors hover:[color:var(--primary-color)]";

const Navbar = () => {
  const primaryColor = useContext(RandomColorContext);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

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

  return (
    <div
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      style={{ "--primary-color": primaryColor }}
    >
      <nav className="backdrop-blur-md rounded-full shadow-xl border border-neutral-800">
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
  );
};

export default Navbar;
