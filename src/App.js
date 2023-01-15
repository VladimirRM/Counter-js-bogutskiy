import React, { useState } from "react";

const App = () => {
  const initialCounters = [
    { id: 123, value: 10 },
    { id: 124, value: 10 },
    { id: 125, value: 10 },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const increment = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(updatedCounts);
  };
  const decrement = (id) => {
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
            <button onClick={() => increment(el.id)}>Plus</button>
            {el.value}
            <button onClick={() => decrement(el.id)}>Minus</button>
          </li>
        ))}
      </ul>
      <button onClick={addCounters}>Add counters</button>
    </div>
  );
};

export default App;
