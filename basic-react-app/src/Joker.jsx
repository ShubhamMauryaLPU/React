import { useState } from "react";

export default function Joker(){
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
        let response=await fetch(URL);
        let jesonResponse=await response.json();
        console.log(jesonResponse);
        setJoke({setup: jesonResponse.setup,punchline:jesonResponse.punchline});
    }
    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}