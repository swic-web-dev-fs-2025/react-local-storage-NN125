import { useLocalStorage } from "@uidotdev/usehooks";
//import { useState } from "react";

import "./App.css";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  // Same API, same benefit, better error handling

  // Rest of your component...

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          id="newTask"
          type="text"
          placeholder="Type new task here..."
          className="mb-4 w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <div className="card">
        <button
          onClick={() => {
            //setTodos((prevCount) => prevCount + 1);
          }}
        >
          Add New Task
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
