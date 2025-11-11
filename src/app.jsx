import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold m-4">React Todo List</h1>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold m-4">Your Tasks:</h2>
          {tasks.length === 0 && "No tasks yet!"}
          <ul className="list-disc list-inside mb-4">
            {tasks.map((newTask, index) => (
              <li key={index}>
                {typeof newTask === "object"
                  ? JSON.stringify(newTask)
                  : String(newTask)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            id="newTask"
            type="text"
            placeholder="Type new task here..."
            className="mb-4 w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
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
        </div>
      </main>
    </>
  );
}
