import React from "react";

const ProjectBanner = ({projectImage, projectName}) => {
  return (
    <div className="relative w-full md:h-[630px] h-[315px] overflow-hidden" >
      <img className="w-full h-full object-cover filter brightness-75 absolute " src={projectImage} />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-center font-bold text-[65px]">{projectName}</h1>
      </div>
    </div>
  );
};

export default ProjectBanner;
