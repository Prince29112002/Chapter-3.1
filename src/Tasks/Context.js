import React, {  useState } from 'react'
import { createContext } from 'react'

export const LgnContext= createContext();

export default function Context(props) {
  const[lang,setLang]=useState("english")



  return (
    <LgnContext.Provider value={[lang,setLang]}>
      {props.children}
    
    </LgnContext.Provider>
  )
}