import React, { useEffect, useState } from "react";
import ProjectViewHeader from "../projects/ProjectViewHeader";

const TasksList = ({ projectId }) => {
  const [tasks, setTasks] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState(null);

  useEffect(() => {
    fetch(`/tasks_by_project_id/${projectId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response!", res);
        setTasks(res.tasks);
      });

    fetch(`task_statuses_by_project_id`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response!", res);
        setTaskStatuses(res.taskStatuses);
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
