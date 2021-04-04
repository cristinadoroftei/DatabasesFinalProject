import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const ProjectView = ({ projectId }) => {
  const navLinkBase = `/project/${projectId}`;

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
      <Router>
        <Navbar className="color-nav" variant="light">
          <Nav className="mr-auto">
            <Nav.Link href={`${navLinkBase}/tasks`}>Tasks</Nav.Link>{" "}
            <Nav.Link href={`${navLinkBase}/team`}>Team</Nav.Link>
          </Nav>
        </Navbar>
      </Router>
      <h2>this is project: {project && project.id}</h2>
    </div>
  );
};
export default ProjectView;
