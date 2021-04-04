import { Card } from "react-bootstrap";
import { ProjectCardWrapper } from "./projects_style";

const Project = ({ project }) => {
  return (
    <ProjectCardWrapper>
      <Card style={{ width: "19rem", height: "12.5rem" }}>
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
