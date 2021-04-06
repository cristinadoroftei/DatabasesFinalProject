import React, { useEffect, useState } from "react";
import ProjectViewHeader from "../projects/ProjectViewHeader";
import TaskCard from "./TaskCard";
import {
  TaskListWrapper,
  TaskStatusTitle,
  TaskStatusWrapper,
} from "./tasks_style";

const TasksList = ({ projectId }) => {
  const [tasks, setTasks] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState(null);

  const getTaskStatus = (task) => {
    const taskStatus = taskStatuses.find(
      (status) => status.id === task.task_status_id
    );
    return taskStatus ? taskStatus.name : taskStatus;
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

  return (
    <div>
      <ProjectViewHeader projectId={projectId} />
      <TaskListWrapper>
        {taskStatuses &&
          tasks &&
          taskStatuses.map((taskStatus) => (
            <TaskStatusWrapper key={taskStatus.id}>
              <TaskStatusTitle>{taskStatus.name}</TaskStatusTitle>
              {tasks.map((task) => {
                return (
                  getTaskStatus(task) === taskStatus.name && (
                    <TaskCard key={task.id} task={task} />
                  )
                );
              })}
            </TaskStatusWrapper>
          ))}
      </TaskListWrapper>
    </div>
  );
};

export default TasksList;
