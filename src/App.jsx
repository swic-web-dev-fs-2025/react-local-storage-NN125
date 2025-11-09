import { useLocalStorage } from "./useLocalStorage";
import "./App.css";

export default function App() {

const [buttonStates, setButtonStates] = useLocalStorage("buttonStates", {
  button1: false,
  button2: false,
  button3: false
});

const handleButtonClick = (buttonName) => {
  setButtonStates(prevState => ({
    ...prevState,
    [buttonName]: !prevState[buttonName]
  }));
};
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
