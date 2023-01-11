import React, { useState } from "react";
import "./App.css";
const initialCounters = [
  {
    id: 123,
    value: 10,
  },
  {
    id: 234,
    value: 20,
  },
  {
    id: 456,
    value: 30,
  },
];

function App() {
  const [counters, setCounters] = useState(5);

  const changePlus = () => {

    const updatedCounts = counters.map( )
        setCounters()
  };
  const changeMinus = () => {
    // setCounter(counter - 1);
  };

  return (
    <div className="App">
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={changePlus}>Plus</button>
            {el.value}
            <button onClick={changeMinus}>Minus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
