import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm.jsx";
import { deleteTodo } from "../features/todo/todoSlice.js";
export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    console.log(todos);
    let dispatch=useDispatch();
    let deleteHandler=(id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    }
    return (
        <div>
            <AddForm/>
            <h2>Todos</h2>
            <hr/>
            <ul>
                {
                    todos.map((todo)=>{
                       return <li key={todo.id}><span>{todo.task}</span>&nbsp;<button onClick={()=>deleteHandler(todo.id)}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    );
}