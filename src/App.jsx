import { useLocalStorage } from "./useLocalStorage";
import "./App.css";

export default function App() {

const [buttonStates, setButtonStates] = useLocalStorage("buttonStates", {
  button1: false,
  button2: false,
  button3: false,
  button4: false,
  button5: false,
  button6: false,
  button7: false,
  button8: false,
  button9: false,
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
        <div>
        <button
          onClick={() => {
            handleButtonClick("button1");
          }}
          className={"btn " + (buttonStates.button1 ? "btn-on" : "btn-off")}
        >
        </button>
        </div>
      </div>
    </>
  );
}
