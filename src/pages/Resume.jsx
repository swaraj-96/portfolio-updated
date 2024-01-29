import React from "react";
import myCv from "../assets/SwarajResume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = () => {
  return (
    <div className="container-max px-4">
      <h1 className="text-lg font-bold text-gray-500 my-4 dark:text-white">
        My resume
      </h1>
      <div className="flex items-center justify-center my-8">
        <img
          src="/images/Resume.jpg"
          alt="resume"
          className="rounded-lg shadow-xl"
        />
      </div>
      <a
        href={myCv}
        download="Swaraj-cv"
        target="_blank"
        className="flex item center justify-center text-center"
      >
        <button className="btn text-white px-4 py-2 mb-4 rounded-md shadow-lg animate-bounce flex items-center justify-between gap-2 text-lg">
          {" "}
          <MdOutlineFileDownload className="w-8 h-8" />
          Download
        </button>
      </a>
    </div>
  );
};

export default Resume;
