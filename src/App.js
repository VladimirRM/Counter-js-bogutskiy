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
  const [counters, setCounters] = useState(initialCounters);

  const changePlus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(updatedCounts);
  };
  const changeMinus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id === id ? { ...el, value: el.value - 1 } : el
    );
    setCounters(updatedCounts);
  };

  return (
    <div className="App">
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={() => changeMinus(el.id)}>Minus</button>
            {el.value}
            <button onClick={() => changePlus(el.id)}>Plus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
