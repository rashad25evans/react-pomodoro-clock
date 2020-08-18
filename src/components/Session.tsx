import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const SessionLength: React.FC = () => {
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
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement" onClick={func}>session-decrement</button>
      <button id="session-increment" onClick={func2}>session-increment</button>
    </>
  )

}
export default SessionLength