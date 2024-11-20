import { useState } from "react";

export default function Form1() {
    let [input, setInput] = useState([]);
    let [fname, setfName] = useState("");
    let [uname, setuName] = useState("");

    let addName = (event) => {
        setfName(event.target.value);
    };

    let addUsername = (event) => {
        setuName(event.target.value);
    };

    let submitData = (event) => {
        event.preventDefault();
        setInput((prevInput) => [
            ...prevInput,
            { name: fname, username: uname }
        ]);
        setfName("");
        setuName("");
    };

    return (
        <>
            <form onSubmit={submitData}>
                <label htmlFor="name">Name:</label>
                <input 
                    placeholder="Enter your name" 
                    id="name" 
                    value={fname} 
                    onChange={addName} 
                />
                <br />
                <label htmlFor="username">Username:</label>
                <input 
                    placeholder="Enter your username" 
                    id="username" 
                    value={uname} 
                    onChange={addUsername} 
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {input.map((el, index) => (
                    <li key={index}>
                        <span>{el.name}</span> &nbsp;
                        <span>{el.username}</span>
                        <span>{index}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}
