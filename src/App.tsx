import * as React from "react";
import { render } from "react-dom";



const App: React.FC = () => {
  return (
    <div>Hello world</div>
  );
}

render(<App />, document.getElementById("root"));