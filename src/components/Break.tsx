import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const BreakLength: React.FC = () => {

  const { dispatch, state } = useContext(LengthContex)
  const { breakLength, sessionLength } = state


  const func = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  const func2 = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }


  return (
    <>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={func}>break-decrement</button>
      <button id="break-increment" onClick={func2}>break-increment</button>
    </>
  )

}
export default BreakLength