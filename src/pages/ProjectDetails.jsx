import React from "react";
import { useParams } from "react-router-dom";
import useProjectInfo from "../utils/useProjectInfo";
import ProjectBanner from "../components/ProjectBanner";
import ProjectDescription from "../components/ProjectDescription";
import ProjectUrl from "../components/ProjectUrl";
import ProjectSnapshot from "../components/ProjectSnapshot";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = useProjectInfo(projectId);
  if (!project) {
    return (
      <p className="text-center text-lg font-semibold">
        Oops! Project not found!!
      </p>
    );
  }
  return (
    <div className="mt-4">
      <ProjectBanner projectImage={project.imgSrc} projectName={project.name} />
      <ProjectDescription projectDescription={project.description} />
      <ProjectUrl
        githubUrl={project.githubUrl}
        deploymentUrl={project.deploymentUrl}
      />
      <h1 className="text-center  text-2xl font-semibold py-4">Snapshots</h1>
      <ProjectSnapshot snapshots = {project.screenshots}/>
    </div>
  );
};

export default ProjectDetails;
