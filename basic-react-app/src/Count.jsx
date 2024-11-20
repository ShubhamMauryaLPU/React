import React from 'react'
import { useState } from 'react'
const Count = () => {
    let [count,setCount]=useState(0);
    let handleClick=()=>(
        setCount(()=>(
            count+1
        ))
    )
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleClick} >Increse</button>
    </div>
  )
}

export default Count
