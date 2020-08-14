import * as React from "react";
import { render } from "react-dom";



const App: React.FC = () => {
  return (
    <div style={{ marginLeft: "600px" }}>
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button id="break-decrement">break-decrement</button>
      <button id="session-decrement">session-decrement</button>
      <button id="break-increment">break-increment</button>
      <button id="session-increment">session-increment</button>
      <button id="break-length">5</button>
      <button id="session-length">25</button>
      <button id="timer-label">Session</button>
      <button id="time-left">mm:ss</button>
      <button id="start_stop">start</button>
      <button id="reset">25:00</button>
    </div>
  );
}

render(<App />, document.getElementById("root"));