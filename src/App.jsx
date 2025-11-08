import "./App.css";
import reactLogo from "./assets/react.svg";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Todo List</h1>
      <div className="card">
        <h2>Your Tasks:</h2>
        {tasks.length === 0 && "No tasks yet!"}
        <ul>
          {tasks.map((newTask, index) => (
            <li key={index}>{typeof newTask === "object" ? JSON.stringify(newTask) : String(newTask)}</li>
          ))}
        </ul>
      </div>
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
            const input = document.getElementById("newTask");
            if (!input) return;
            const inputTrimmed = input.value.trim();
            if (!inputTrimmed) return;
            let newItem = "";
            try {
              // try to parse JSON input (arrays, objects, numbers, booleans, etc.)
              newItem = JSON.parse(inputTrimmed);
            } catch {
              // if not valid JSON, keep as plain string
              newItem = inputTrimmed;
            }
            setTasks((prevTasks) => [...prevTasks, newItem]);
            input.value = "";
          }}
        >
          Add New Task
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more
      </p>
    </>
  );
}
