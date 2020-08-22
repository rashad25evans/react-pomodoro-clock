import * as React from "react";
import { createContext, useReducer, useMemo } from "react"
import StateInterface from "../Interfaces/StateInterface"
import lengthReducer from "../reducers/lengthReducer"

export const LengthContex = createContext(
  null
);

const LengthContexProvider = (props) => {
  
  const [state, dispatch] = useReducer(lengthReducer, {
    sessionLength: 25,
    breakLength: 5,
  })
  
  // Memoization
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <LengthContex.Provider value={providerValue}>
      {props.children}
    </LengthContex.Provider>
  )
}


export default LengthContexProvider



