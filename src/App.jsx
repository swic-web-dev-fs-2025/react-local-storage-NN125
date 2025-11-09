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
        {/* Third row of buttons */}
        <div>
        <button
          onClick={() => {
            handleButtonClick("button9");
          }}
          className={"btn " + (buttonStates.button9 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button10");
          }}
          className={"btn " + (buttonStates.button10 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button11");
          }}
          className={"btn " + (buttonStates.button11 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button12");
          }}
          className={"btn " + (buttonStates.button12 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        </div>
        {/* Fourth row of buttons */}
        <div>
        <button
          onClick={() => {
            handleButtonClick("button13");
          }}
          className={"btn " + (buttonStates.button13 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button14");
          }}
          className={"btn " + (buttonStates.button14 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button15");
          }}
          className={"btn " + (buttonStates.button15 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        <button
          onClick={() => {
            handleButtonClick("button16");
          }}
          className={"btn " + (buttonStates.button16 ? "btn-on" : "btn-off")}
          style={{ margin: "5px" }}
        >
        </button>
        </div>
      </div>
    </>
  );
}
