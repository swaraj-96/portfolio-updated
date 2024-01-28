import React from "react";

const ProjectCard = (props) => {
  const { projectData } = props;
  return (
    <div className="work shadow-xl">
      <img className="" src={projectData.imgSrc} alt={projectData.name} />
      <div
        className="layer"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), ${projectData.color})`,
        }}
      >
        <h3 className="text-lg font-semibold text-white mb-2">{projectData.name}</h3>
        <button className= "text-center rounded-md px-4 py-2 bg-white">Read more...</button>
      </div>
    </div>
  );
};

export default ProjectCard;
