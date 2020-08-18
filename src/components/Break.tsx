import * as React from "react";
import { useReducer } from "react"
import UserContex from "../context/LengthContext";

const reducer = (state, action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}


const BreakLength: React.FC = () => {
  // const { value, setValue } = useContext(UserContex)
  // const { breakLength, sessionLength } = value

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      {/* <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement">break-decrement</button>
      <button id="break-increment">break-increment</button> */}
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </>
  )

}
export default BreakLength