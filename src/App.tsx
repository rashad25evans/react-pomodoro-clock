import * as React from "react";
import LengthContexProvider from "./context/LengthContext"
import Session from "./components/Session"
import Break from "./components/Break";
import Display from "./components/Display";
import MediaButtons from "./components/Media"



const App: React.FC = () => {
  // const [value, setValue] = useState<StateInterface>({
  //   sessionLength: 25,
  //   breakLength: 5
  // }
  // );

  return (
    <div style={{ marginLeft: "600px" }}>
      <LengthContexProvider>
        <Session />
        <Break />
        <Display />
        <MediaButtons />
      </LengthContexProvider>
    </div>
  );
}

export default App
