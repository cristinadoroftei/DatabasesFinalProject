import React, { useEffect, useState } from "react";
import ProjectViewHeader from "../projects/ProjectViewHeader";
import TaskCard from "./TaskCard";
import { TaskStatusTitle, TaskStatusWrapper } from "./tasks_style";

const TasksList = ({ projectId }) => {
  const [tasks, setTasks] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState(null);

  const getTaskStatus = (task) => {
    return taskStatuses.find((status) => status.id === task.task_status_id)
      .name;
  };

  useEffect(() => {
    fetch(`/tasks_by_project_id/${projectId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTasks(res.tasks);
      });

    fetch(`/task_statuses_by_project_id/${projectId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTaskStatuses(res.taskStatuses);
      });
  }, [projectId]);

  console.log("tasks!", tasks);
  console.log("tasks!statuses", taskStatuses);

  return (
    <div>
      <ProjectViewHeader projectId={projectId} />

      {taskStatuses &&
        tasks &&
        taskStatuses.map((taskStatus) => (
          <TaskStatusWrapper>
            <TaskStatusTitle>{taskStatus.name}</TaskStatusTitle>
            {tasks.map((task) => {
              return (
                getTaskStatus(task) === taskStatus.name && (
                  <TaskCard task={task} />
                )
              );
            })}
          </TaskStatusWrapper>
        ))}
    </div>
  );
};

export default TasksList;
