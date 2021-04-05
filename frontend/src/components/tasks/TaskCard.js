import { Card } from "react-bootstrap";

const TaskCard = ({ task }) => {
  return (
    <Card className="task_card">
      <Card.Body style={{ padding: "10px 10px" }}>
        <Card.Title style={{ fontSize: "0.9rem" }}>{task.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
