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
  button10: false,
  button11: false,
  button12: false,
  button13: false,
  button14: false,
  button15: false,
  button16: false,
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
        {/* First row of buttons */}
        <div>
        <button
          onClick={() => {
            handleButtonClick("button1");
          }}
          className={"btn " + (buttonStates.button1 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button2");
          }}
          className={"btn " + (buttonStates.button2 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button3");
          }}
          className={"btn " + (buttonStates.button3 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button4");
          }}
          className={"btn " + (buttonStates.button4 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        </div>
        {/* Second row of buttons */}
        <div>
        <button
          onClick={() => {
            handleButtonClick("button5");
          }}
          className={"btn " + (buttonStates.button5 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button6");
          }}
          className={"btn " + (buttonStates.button6 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button7");
          }}
          className={"btn " + (buttonStates.button7 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button8");
          }}
          className={"btn " + (buttonStates.button8 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        </div>
      </div>
    </>
  );
}
