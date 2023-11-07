import React, { useEffect } from 'react';
import { useRef } from 'react';

const Useref = () => {
    const refElement = useRef(null);
    console.log(refElement);
    useEffect(()=>{
        
          refElement.current.focus();
    },[])
  return (
    <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <h1>This Is Task E</h1>
    <input ref={refElement} type='text'></input>
    </div>
    </>
    
  )
}

export default Useref