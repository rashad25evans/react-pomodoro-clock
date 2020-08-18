import * as React from "react";
import { useContext } from "react"
import UserContex from "../UserContext";


const SessionLength: React.FC = () => {
  const { value, setValue } = useContext(UserContex)
  const { breakLength, sessionLength } = value

  return (
    <>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement">session-decrement</button>
      <button id="session-increment">session-increment</button>
    </>
  )

}
export default SessionLength