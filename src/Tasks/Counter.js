import React, { useReducer } from 'react'

const initialstate=0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment" :
            return state+1
        case "Decrement" :
            return state-1
        case "Reset" :
            return 0;
            default : return state

};
}

function Counter  ()  {
const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>This Is Task D</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={()=> dispatch("Increment")}>+</button>
        <button onClick={()=> dispatch("Decrement")}>-</button><br />
        </div>
        <button onClick={()=> dispatch("Reset")}>Reset</button>
    </div>
    </>
  )
}

export default Counter