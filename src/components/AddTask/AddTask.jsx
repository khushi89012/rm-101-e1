import React,{useState, useEffect} from "react";
import styles from "./addTask.module.css";
import axios from "axios";



const AddTask = () => {
  const [task, setTask] = useState({
    id: Math.random()*100,
    text: "",
    done: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/tasks", task)
    .then(res => {
      console.log(res);
      setTasks([...tasks, res.data]);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }
    
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text"
       value = {task.text}
      onChange={handleChange} />
      <button data-testid="add-task-button" onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default AddTask;
