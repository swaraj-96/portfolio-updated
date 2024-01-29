import React from "react";
import {FaGithub} from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectUrl = ({ githubUrl, deploymentUrl }) => {
  return (
    <div className="container-max px-4 flex justify-center items-center my-4">
      <a
        href={githubUrl}
        className="btn px-4 py-2 text-white rounded-md mr-2 animate-pulse flex items-center justify-between gap-2 text-lg"
        target="_blank"
      >
       <FaGithub className="w-6 h-6"/> GitHub
      </a>
      <a
        href={deploymentUrl}
        className="btn  px-4 py-2 text-white rounded-md animate-pulse flex items-center justify-between gap-2 text-lg"
        target="_blank"
      >
       <FaExternalLinkAlt className="w-4 h-4"/> Live Preview
      </a>
    </div>
  );
};

export default ProjectUrl;
