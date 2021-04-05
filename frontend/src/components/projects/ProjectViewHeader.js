import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const projectViewHeader = ({ projectId, location }) => {
  const navLinkBase = `/project/${projectId}`;

  return (
    <Router>
      <Navbar className="project_view_color_nav " variant="light">
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link
            style={{ marginLeft: "22px" }}
            href={`${navLinkBase}/tasks`}
          >
            Tasks
          </Nav.Link>{" "}
          <Nav.Link href={`${navLinkBase}/team`}>Team</Nav.Link>
        </Nav>
      </Navbar>
    </Router>
  );
};

export default withRouter(projectViewHeader);
