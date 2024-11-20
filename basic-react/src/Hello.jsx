import React, { useState } from "react";
import "./Hello.css";
const Hello = () => {
  let [todo,setTodo]=useState(["Sample"]);
  let [task,setTask]=useState("");

 
  let addTodo=(e)=>{
    e.preventDefault();
    setTodo((curr)=>{
      return [...curr,task];
    })
    setTask("");
    console.log(todo);
  }
  let addTask=(e)=>{
    setTask(e.target.value);
    console.log(task);
  }
  return (
    <div className="mainDiv">
      <label htmlFor="todoInput">Input Todo: </label>
      <input
        type="text"
        placeholder="Enter todo here"
        onChange={addTask}
        value={task}
      />
      <button onClick={addTodo}>Add</button>
      {todo.map((val, idx) => (
        <li key={idx}>{val} </li>
      ))}
    </div>
  );
};

export default Hello;
