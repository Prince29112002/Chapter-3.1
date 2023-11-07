import React from "react";
import Toggle from "./Tasks/Toggle";
import Api from "./Tasks/Api";
import Lang from "./Tasks/Lang";
import Context from "./Tasks/Context";
import Counter from "./Tasks/Counter";
import Useref from "./Tasks/Useref";
import TaskF from "./Tasks/TaskF";
import Demo from "./Tasks/TaskG";


function App() {

  
  
  return (
    <>
    <Toggle />
    <hr />
    <Api />
    <hr />
    <Context>
    <Lang />
    </Context>
    <hr />
    <Counter />
    <hr/>
    <Useref />
    <hr />
    <TaskF />
    <hr />
    <Demo />
    <hr />
    </>
    
  );
}

export default App;
