import React, { useCallback, useMemo, useState } from 'react'

const TaskF = () => {
    const [inputList, setInputList] = useState("");
    const [list, setlist] = useState([]);
    const [dataList] = useState();
    const [data, setData] = useState([]);
  
    const itemAdded = useCallback(() => {
      setData([...data, inputList * inputList])
      if (inputList.length > 0) {
        setlist([...list, `${inputList}'s Square = ${inputList * inputList}`])
      }
      setInputList("")
    },[inputList]);
  
    const memory = useMemo(() => {
      return data.reduce((total, val) => {
        return eval(total + val)
      }, [dataList])
    })
  
  return (
    <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <h1>This Is Task F</h1>
        <input type="number" placeholder='Enter a Number' name='' id='' value={inputList} onChange={(event) => setInputList(event.target.value)} />
        <button onClick={itemAdded}>Submit</button>
        <h2>Sum Is: {memory}</h2>
        <ul>
          {list.map((itemValue, index) => {

            return <li key={index} >
              <div>
                <div><i  aria-hidden="true" /> </div> 
                <div>{itemValue}</div>
              </div>
            </li>
          })}
        </ul>
        <div>

        </div>
      </div>
    </>
  )
}


export default TaskF

