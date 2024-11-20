import { useState } from "react";

    
export default function Button(){
    let [count,setCount]=useState(0);
    function addClick(){
        // setCount(count+1);
        let co=count<20&&setCount(count+1);
    }
    function subClick(){
        // setCount(count+1);
        let so=count>0&&setCount(count-1);
    }
    return(
        <>
            <button onClick={addClick}>add</button>
            <p>{count}</p>
            <button onClick={subClick}>sub</button>
        </>
    );
}