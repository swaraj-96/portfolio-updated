import React from "react";
import { projectInfo } from "../utils/projectInfo";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Project = () => {
  const data = projectInfo.projects;
  return (
    <div className="container-max px-4">
      <h4 className="text-center block text-gray-500">
        ~
        <span className="text-2xl font-semibold px-2 text-black dark:text-white">PROJECTS</span>
        ~
      </h4>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {data.map((project) => (
          <Link key={project.id} to={"/projects/" + project.id}>
            <ProjectCard projectData={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
