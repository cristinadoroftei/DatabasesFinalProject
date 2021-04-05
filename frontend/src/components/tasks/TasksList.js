import React, { useEffect, useState } from "react";
import ProjectViewHeader from "../projects/ProjectViewHeader";

const TasksList = ({ projectId }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`/tasksByProjectId/${projectId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response!", res);
        setTasks(res.tasks);
      });
  }, [projectId]);

  console.log("tasks!", tasks);

  return (
    <div>
      <ProjectViewHeader projectId={projectId} />
      in tasks!
    </div>
  );
};

export default TasksList;
