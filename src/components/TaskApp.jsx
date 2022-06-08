import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";

// import Task from "./Task/Task";
import Tasks  from "./Tasks/Tasks";
const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* <TaskHeader /> */}
      <AddTask />
      {/* <Task /> */}
      <Tasks />
    </div>
  );
};

export default TaskApp;
