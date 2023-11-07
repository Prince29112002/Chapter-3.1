import { useState } from "react";
import { useLocalStorage } from "./TaskG2";

const Demo =() => {
    const [value, setValue] = useState('');

   const { setItem, getItem, removeItem } = useLocalStorage('value'); 

    return (
        <>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>This Is Task G</h1>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <div>
            <button onClick={() => setItem(value)}>Set</button>
            <button onClick={() => console.log(getItem())}>Get</button>
            <button onClick={removeItem}>Remove</button>
        </div>
        </div>
        </>
    );
};

export default Demo;