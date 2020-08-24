import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const Session: React.FC = () => {
  const { dispatch, state } = useContext(LengthContex)
  const { sessionMinutes } = state


  const decrement = () => {
    dispatch({
      type: 'DECREMENT_SESSION'
    })
  }

  const increment = () => {
    dispatch({
      type: 'INCREMENT_SESSION'
    })
  }

  return (
    <>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionMinutes}</div>
      <button id="session-decrement" onClick={decrement}>session-decrement</button>
      <button id="session-increment" onClick={increment}>session-increment</button>
    </>
  )

}
export default Session