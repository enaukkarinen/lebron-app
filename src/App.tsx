import React from "react";

import "./App.css";
import { Clock } from "./components/webgl-capsule/clock";
import { WebGlCapsule } from "./components/webgl-capsule/webgl-capsule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebGlCapsule></WebGlCapsule>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
