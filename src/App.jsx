import { useState } from "react";

import "./App.css";

export default function App() {

const [buttonStates, setButtonStates] = useState({
  button1: false,
  button2: false,
  button3: false
});
  return (
    <>
      <h1>Button State</h1>
      <div className="card">
        <button
          onClick={() => {

          }}
        >
        </button>
      </div>
    </>
  );
}
