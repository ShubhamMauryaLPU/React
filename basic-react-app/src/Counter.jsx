import { useState,useEffect } from "react"

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    let Increasex=()=>{
        setCountx((currCount)=>{
            return currCount+1;
        });
        
    }
    let Increasey=()=>{
        setCounty((currCount)=>{
            return currCount+1;
        });
        
    }
    useEffect(function printSomething(){
        console.log("useEffect is called");
    },
    [countx]
)
    return(
        <div>
            <h3>Count={countx}</h3>
            <button onClick={Increasex}>Increase</button>
            <h3>Count={county}</h3>
            <button onClick={Increasey}>Increase</button>

        </div>
    )
}