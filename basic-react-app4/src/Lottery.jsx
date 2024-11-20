import { useState } from "react";
import { genTicket,sum } from "./helper";
export default function (){
    let [ticket,setTicket]=useState([0,0,0]);
    let isWinning=sum(ticket)===15;
    let buyTicket=()=>{
        setTicket(genTicket(3));
    }
    return(
        <>
            <h1>Lottery Game!</h1>
            <h3>{isWinning&&"Congratulations you won!"}</h3>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            
            <button onClick={buyTicket}>Generate Ticket</button>

        </>

    );
}