import React from "react";
import { Link } from "react-router-dom";

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
        <h3 className="text-lg font-semibold text-white mb-2">
          {projectData.name}
        </h3>
        <Link to={"/projects/" + projectData.id}>
          <button className="text-center rounded-md px-4 py-2 bg-white hover:bg-red-600 hover:text-white">
            Read more...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
