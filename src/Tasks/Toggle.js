import React, { useState } from "react";

function Toggle () {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const togglestyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <>
    <div style={{ textAlign: "center" }}>
      <h1 style={myStyle}>This Is Task A</h1>
      <button onClick={togglestyle} type="button" className="btn btn-primary">
        {btntext}
      </button>
    </div>
    </>
    
  );
}

  export default Toggle;