import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function (n,winningSum){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)===winningSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <>
            <h1>Lottery Game!</h1>
            <h3>{isWinning&&"Congratulations you won!"}</h3>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Generate Ticket</button>

        </>

    );
}