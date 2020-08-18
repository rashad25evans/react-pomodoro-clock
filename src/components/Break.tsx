import * as React from "react";
import { useContext } from "react"
import UserContex from "../UserContext";


const BreakLength: React.FC = () => {
  const { value, setValue } = useContext(UserContex)
  const { breakLength, sessionLength } = value

  return (
    <>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement">break-decrement</button>
      <button id="break-increment">break-increment</button>
    </>
  )

}
export default BreakLength