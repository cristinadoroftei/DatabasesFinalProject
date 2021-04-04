import { Card } from "react-bootstrap";
import { ProjectCardWrapper } from "./projects_style";
import "../../styles/app_style.css";
import { withRouter } from "react-router-dom";

const Project = ({ project, history }) => {
  const handleSelectProject = () => {
    history.replace(`/project/${project.id}`);
  };

  return (
    <ProjectCardWrapper>
      <Card
        onClick={handleSelectProject}
        border="info"
        className="project_card"
      >
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

export default withRouter(Project);
