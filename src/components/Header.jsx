import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const [headerBlur, setHeaderBlur] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleItemClick = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    function headerBlurChecker() {
      if (window.scrollY > 100) {
        setHeaderBlur(true);
      } else {
        setHeaderBlur(false);
      }
    }
    document.addEventListener("scroll", headerBlurChecker);

    return () => window.removeEventListener("scroll", headerBlurChecker);
  }, []);

  return (
    <header
      className={`sticky w-full top-0 z-50  backdrop-filter backdrop-blur-xl bg-opacity-0 ${
        headerBlur &&
        "border-b dark:border-gray-700 border-gray-200 bg-[rgba(255, 255, 255, 0.2)] "
      }`}
    >
      <ProgressBar />
      <div className=" container-max px-4 flex justify-between items-center h-24 flex-col sm:flex-row">
        <div className="flex items-center gap-4 justify-between w-full sm:w-0 py-4 sm:py-0">
          <Link to="/" className=" text-xl font-semibold dark:text-white">
            SWARAJ
          </Link>
          <ThemeButton />
        </div>
        <ul className="flex gap-12 items-center mb-4 sm:mb-0 sm:gap-6 text-black dark:text-white">
          <li>
            <Link
              to="/"
              className={`bar hover:text-red-600 text-lg ${
                activeLink === 0 ? " text-red-600 bar-active" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`bar hover:text-red-600 text-lg ${
                activeLink === 1 ? " text-red-600 bar-active" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={`bar hover:text-red-600 text-lg ${
                activeLink === 2 ? " text-red-600 bar-active" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
