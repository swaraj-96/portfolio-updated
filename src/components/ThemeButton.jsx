import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="toggle flex justify-center items-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={darkMode}
          onChange={() => {
            setDarkMode(!darkMode);
          }}
          className="theme-checkbox opacity-0 absolute"
        />
        <label
          htmlFor="checkbox"
          className={`theme-label ${
            darkMode ? "bg-[#374151]" : "bg-[#2167e9]"
          }`}
        >
          <div className="ball"></div>
          <MdDarkMode />
          <MdLightMode />
        </label>
      </div>
    </>
  );
};

export default ThemeButton;
