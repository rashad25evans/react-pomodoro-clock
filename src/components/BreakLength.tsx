import * as React from "react";
import { State } from "../Interfaces/StateInterface"


const BreakLength: React.FC<State> = (props) => {
  return (
    <>
      <div id="break-label">Break Length</div>
      <div id="break-length">{props.break}</div>
      <button id="break-decrement">break-decrement</button>
      <button id="break-increment">break-increment</button>
    </>
  )

}
export default BreakLength