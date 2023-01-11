import React, { useState } from "react";
import "./App.css";
const initialCounters = [
  {
    id: 123,
    value: 10,
  },
  {
    id: sgh,
    value: 10,
  },
  {
    id: dh,
    value: 10,
  },
];

function App() {
  const [counters, setCounters] = useState(5);

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
