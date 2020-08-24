import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const BreakLength: React.FC = () => {

  const { dispatch, state } = useContext(LengthContex)
  const { breakLength, sessionLength } = state


  const decrement = () => {
    dispatch({
      type: 'DECREMENT_BREAK'
    })
  }

  const increment = () => {
    dispatch({
      type: 'INCREMENT_BREAK'
    })
  }


  return (
    <>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={decrement}>break-decrement</button>
      <button id="break-increment" onClick={increment}>break-increment</button>
    </>
  )

}
export default BreakLength