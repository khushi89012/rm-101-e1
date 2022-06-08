import React from "react";
import styles from "./tasks.module.css";
import axios from "axios";
import { useEffect, useState} from "react";
import Task from "../Task/Task.jsx";

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
},[tasks])

const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/tasks/${id}`)
  .then(res => {
    console.log(res);
    setTasks(tasks.filter(task => task.id !== id));
  }
  )
  .catch(err => {
    console.log(err);
  }
  )
}





  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {tasks.map((item,id) => (
          <ul key={id}>
            <li data-testid="task">
              {item.text}
              </li>
              <li data-testid="task">
              {item.done}
              </li>
              <button data-testid="delete-task"
              onClick={()=>{
                handleDelete(item.id)
              }}
              >Delete</button>
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
