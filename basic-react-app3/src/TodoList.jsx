import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoApp() {
  let [todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((todo) => [...todo, newTodo]);
    setNewTodo("");
  };
  let updateTodos = (event) => {
    setNewTodo(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={updateTodos}
        value={newTodo}
      />
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <hr />
      <ul>
        {todos.map((el,idx) => (
          <li key={idx} >{el}</li>
        ))}
      </ul>
    </>
  );
}
