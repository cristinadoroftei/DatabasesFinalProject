import React, { useEffect, useState } from "react";

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

  return <div>in tasks!</div>;
};

export default TasksList;
