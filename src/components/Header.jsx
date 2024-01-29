import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="sticky w-full top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-30">
      <ProgressBar/>
      <div className=" container-max px-4 flex justify-between items-center h-24">
        <div className="flex items-center gap-4">
          <h3 className=" text-xl font-semibold">SWARAJ</h3>
          <ThemeButton/>
        </div>
        <ul className="flex items-center gap-6 ">
          <li>
            <Link to="/" className="bar hover:text-black text-gray-500 text-lg font-">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="bar hover:text-black text-zinc-500 text-lg">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/resume" className="bar hover:text-black text-zinc-500 text-lg">
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
