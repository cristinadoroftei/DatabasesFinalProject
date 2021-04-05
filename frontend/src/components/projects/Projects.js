import React, { useEffect, useState } from "react";
import Project from "./ProjectCard";
import { ProjectsWrapper } from "./projects_style";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("getText")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response!", res);
        setProjects(res.projects);
      });
  }, []);

  return (
    <ProjectsWrapper>
      {projects &&
        projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
    </ProjectsWrapper>
  );
};

export default Projects;
