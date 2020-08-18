import * as React from "react";
import { useState } from "react"
import { StateInterface } from "./Interfaces/StateInterface"
import Session from "./components/Session"
import Break from "./components/Break";
import Display from "./components/Display";
import MediaButtons from "./components/Media"
import UserContext from "./UserContext"


const App: React.FC = () => {
  const [value, setValue] = useState<StateInterface>({
    breakLength: 5,
    sessionLength: 25
  }
  );


  return (
    <div style={{ marginLeft: "600px" }}>
      <UserContext.Provider value={{ value, setValue }}>
        <Session />
        <Break />
        <Display />
        <MediaButtons />
      </UserContext.Provider>
    </div >
  );
}

export default App
