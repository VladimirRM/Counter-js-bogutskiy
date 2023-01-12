import React, { useState } from "react";
import "./App.css";
import "./index.css";

const App = () => {
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

  const createCounter = (id) => {
    const newCount = {
      id: Math.random(),
      value: 0,
    };
    setCounters([...counters, newCount]);
  };

  const removeCount = (id) => {
    setCounters(counters.filter((el) => el.id !== id));
  };

  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={() => changeMinus(el.id)}>Minus</button>
            {el.value}
            <button onClick={() => changePlus(el.id)}>Plus</button>
            <button onClick={() => removeCount(el.id)}>Delete</button>
          </li>
        ))}
        <button onClick={() => createCounter()}>Add counter</button>
      </ul>
    </div>
  );
};

export default App;
