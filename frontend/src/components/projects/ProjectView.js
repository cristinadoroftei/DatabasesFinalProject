import React, { useEffect, useState } from "react";
import ProjectViewHeader from "./ProjectViewHeader";

const ProjectView = ({ projectId }) => {
  const [project, setProject] = useState(null);

  const getProjectById = (id) => {
    fetch(`/project/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response!project", res);
        setProject(res.project);
      });
  };

  useEffect(() => {
    getProjectById(projectId);
  }, [projectId]);

  return (
    <div>
      <ProjectViewHeader projectId={projectId} />
      <h2>this is project: {project && project.id}</h2>
    </div>
  );
};
export default ProjectView;
