import React from 'react';
import { useState, useEffect } from "react";

const Api = () => {
    const [user, setUser] = useState([]);

  const fetchUser= () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {return response.json()})
      .then((json) => setUser(json));
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return(
  <>
  <div key={user.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
      <h1>This Is Task B</h1>
        {
        
          user.map((value)=><h4>{value.name}</h4>)
        }
    </div>
    </>
  );
}
  

export default Api