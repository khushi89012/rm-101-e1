import React from "react";
import styles from "./task.module.css";
import { useState } from "react";
import Counter from "../Counter/Counter";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = ()=>{
    setTask(task);
    setTasks([...tasks, task]);
  }





  // NOTE: do not delete `data-testid` key value pair


  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onChange={handleTask} />
      <div data-testid="task-text"></div>
      <Counter />

      {/* <button 
      onClick={handleDeleteTask}
      data-testid="task-remove-button">
        <span>X</span>
      </button> */}
    </li>
  );
};

export default Task;
