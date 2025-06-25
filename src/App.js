import React, { useRef, useState } from "react";

import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const addingNumbers = (num) => {
    num.preventDefault();
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  };

  const substractingNumbers = (num) => {
    num.preventDefault();
    setResult((result) => {
      return result - Number(inputRef.current.value);
    });
  };

  const multiplyingNumbers = (num) => {
    num.preventDefault();
    setResult((result) => {
      return result * Number(inputRef.current.value);
    });
  };

  const dividingNumbers = (num) => {
    num.preventDefault();
    setResult((result) => {
      return result / Number(inputRef.current.value);
    });
  };

  const resetingInput = (num) => {
    num.preventDefault();
    inputRef.current.value = 0;
  };

  const resetingResult = (num) => {
    num.preventDefault();
    setResult(0);
  };

  return (
    <div className="calculator-container">
      <h1>Simplest Working Calculator</h1>

      <form>
        <p ref={resultRef}>Result: {result}</p>
        <div>
          <input
            type="number"
            placeholder="Type a number"
            ref={inputRef}
            defaultValue={0}
          />
        </div>
        <button onClick={addingNumbers}>+</button>
        <button onClick={substractingNumbers}>-</button>
        <button onClick={multiplyingNumbers}>*</button>
        <button onClick={dividingNumbers}>/</button>
        <div>
          <button className="reset-button" onClick={resetingInput}>
            Reset Input
          </button>
          <button className="reset-button" onClick={resetingResult}>
            Reset Result
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
