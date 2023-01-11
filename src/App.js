import React, { useState } from "react";
import "./App.css";
 const initialCounters = []

function App() {
  const [counter, setCounter] = useState(5);

  const changePlus = () => {
    setCounter(counter + 1);
  };
  const changeMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      {counter}
      <button onClick={changePlus}>Plus</button>
      <button onClick={changeMinus}>Minus</button>
    </div>
  );
}

export default App;
