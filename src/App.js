import React, { useState } from "react";
import "./index.css";
import "./App.css";

const initialCounters = [
  {
    id: 123,
    value: 10,
  },
  {
    id: 456,
    value: 10,
  },
  {
    id: 789,
    value: 10,
  },
];

const App = () => {
  const [counters, setCounters] = useState(0);

  const changePlus = () => {
    setCount(counters + 1);
  };
  const changeMinus = () => {
    setCount(counters - 1);
  };
  return (
    <div>
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
};

export default App;
