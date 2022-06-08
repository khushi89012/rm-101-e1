import React from "react";
import styles from "./tasks.module.css";
import axios from "axios";
import { useEffect, useState} from "react";
import TaskHeader from '../TaskHeader/TaskHeader.jsx';

const Tasks = () => {
const [tasks,setTasks] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:8080/tasks")
  .then(res => {
    console.log(res);
    setTasks(res.data);
  }
  )
  .catch(err => {
    console.log(err);
  }
  )
},[])

let length = tasks.length;




  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {tasks.map(task => (
          
          <ul>
            <li>{task.text}</li>
            <li>{task.done}</li>
            <li>{task.count}</li>
          </ul>
      

        ))}


        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        <span>No tasks</span>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
