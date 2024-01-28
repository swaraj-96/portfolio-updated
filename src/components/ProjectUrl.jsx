import React from "react";

const ProjectUrl = ({ githubUrl, deploymentUrl }) => {
  return (
    <div className="container-max px-4 flex justify-center items-center my-4">
      <a
        href={githubUrl}
        className="bg-blue-600 px-4 py-2 text-white rounded-md mr-2"
        target="_blank"
      >
        GitHub
      </a>
      <a
        href={deploymentUrl}
        className="bg-blue-600 px-4 py-2 text-white rounded-md"
        target="_blank"
      >
        Live Preview
      </a>
    </div>
  );
};

export default ProjectUrl;
