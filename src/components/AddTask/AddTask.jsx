import React,{useState, useEffect} from "react";
import styles from "./addTask.module.css";
import axios from "axios";



const AddTask = ({count}) => {
  const [task, setTask] = useState({
    id: Math.round(Math.random()* 100),
    text: "",
    done: false,
    count: Math.round(Math.random()* 100),
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });

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
      <input
      
       data-testid="add-task-input" type="text"
       value = {task.text}
       name = "text"
      onChange={handleChange} />
      <button data-testid="add-task-button" onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default AddTask;
