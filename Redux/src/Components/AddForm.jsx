import { useState } from "react";
import { useDispatch } from "react-redux";
import{addTodo} from "../features/todo/todoSlice";
export default function addForm(){
    const [task,setTast]=useState("");
    const dispatch=useDispatch();
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTast("");
    }
    return(
        <>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter your task" onChange={(e)=>setTast(e.target.value)}/>
            <button type="submit">Add task</button>
            </form>
        </>
    );
}