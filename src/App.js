import React, { useState } from "react";

const App = () => {
  const initialCounters = [
    {
      id: 123,
      value: 10,
    },
    {
      id: 125,
      value: 10,
    },
    {
      id: 126,
      value: 10,
    },
  ];

  const [counters, setCounters] = useState(initialCounters);
  const incrementPlus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(updatedCounts);
  };
  const decrementMinus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id === id ? { ...el, value: el.value - 1 } : el
    );
    setCounters(updatedCounts);
  };
  const addCounters = () => {
    const newCount = {
      id: Math.random(),
      value: 0,
    };
    setCounters([...counters, newCount]);
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onclick={() => incrementPlus(el.id)}>Plus</button>
            {el.value}
            <button onclick={() => decrementMinus(el.id)}>Minus</button>
          </li>
        ))}
      </ul>
      <button onClick={addCounters}>Add counters </button>
    </div>
  );
};

export default App;
