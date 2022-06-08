import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleCount = ()=>{
    setCount(count + 1);
  }
  const handleDecrement = ()=>
  {
    setCount(count - 1);
  }




  // sample value to be replaced

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
      onClick={handleCount}
       data-testid="task-counter-increment-button">
        <span>+</span>
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
      onClick={handleDecrement}
       data-testid="task-counter-decrement-button"   >
        <span>-</span>
      </button>
    </div>
  );
};

export default Counter;
