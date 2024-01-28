import { projectInfo } from "./projectInfo";
const useProjectInfo = (projectId) => {
    const project = projectInfo.projects.find((p) => p.id === projectId);
    return project;
}

export default useProjectInfo;