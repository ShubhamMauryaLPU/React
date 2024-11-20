import { useState } from "react";
export default function Ticket(){
    let tick1=Math.floor(Math.random()*10);
    let tick2=Math.floor(Math.random()*10);
    let tick3=Math.floor(Math.random()*10);
    let [ticket,setTicket]=useState(0);
    let isTicket=tick1+tick2+tick3===15;
    let getTicket=()=>{
                setTicket(()=>{
                    return tick1*100+tick2*10+tick3;
                })
            }
    return(
        <>
            <h2>Lottery</h2>
            <p>Lotery ticket ={ticket}</p>
            <p>{isTicket&&"Congratulations you won!"}</p>
            <button onClick={getTicket}>Get new Ticket</button>
        </>
    );
}