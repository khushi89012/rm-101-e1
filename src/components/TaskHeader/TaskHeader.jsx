import React,{useEffect, useState} from "react";
import styles from "./taskHeader.module.css";
import Counter from "../Counter/Counter";
import axios from "axios";

const TaskHeader = () => {
  // sample values to be replaced

  const [task, setTask] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/tasks")
    .then(res => {
      setTask(res.data);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }, []);

  let totalTask = task.length;
  let unCompletedTask = task.filter(task => task.done === false).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      
      <b data-testid="header-remaining-task">Uncompleted : {unCompletedTask}</b> ||
      <b data-testid="header-total-task">Total Task : {totalTask}</b>
    </div>
  );
};

export default TaskHeader;
