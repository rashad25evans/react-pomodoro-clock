import * as React from "react";
import { State } from "../Interfaces/StateInterface"


const SessionLength: React.FC<State> = (props) => {
  return (
    <>
      <div id="session-label">Session Length</div>
      <div id="session-length">{props.session}</div>
      <button id="session-decrement">session-decrement</button>
      <button id="session-increment">session-increment</button>
    </>
  )

}
export default SessionLength