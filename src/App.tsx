import * as React from "react";
import { useState } from "react"
import { State } from "./Interfaces/StateInterface"
import SessionLength from "./components/SessionLength"
import BreakLength from "./components/BreakLength";
import Display from "./components/Display";
import MediaButtons from "./components/MediaButtons"


const App: React.FC = () => {
  const [state, setState] = useState<State>({
    break: 5,
    session: 25
  });

  return (
    <div style={{ marginLeft: "600px" }}>
      <SessionLength session={state.session} />
      <BreakLength break={state.break} />
      <Display />
      <MediaButtons />
    </div >
  );
}

export default App
