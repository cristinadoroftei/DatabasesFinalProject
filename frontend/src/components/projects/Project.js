import { Card } from "react-bootstrap";
import { ProjectCardWrapper } from "./projects_style";
import "../../styles/app_style.css";

const Project = ({ project }) => {
  return (
    <ProjectCardWrapper>
      <Card border="info" className="project_card">
        <Card.Body>
          <Card.Title style={{ height: "4rem" }}>{project.name}</Card.Title>
          <Card.Text>
            {project.description ? project.description : "-"}
          </Card.Text>
        </Card.Body>
      </Card>
    </ProjectCardWrapper>
  );
};

export default Project;
