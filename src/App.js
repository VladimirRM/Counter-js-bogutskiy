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

  const deleteCounter = (id) => {
    setCounters(counters.filter((el) => el.id !== id));
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={() => incrementPlus(el.id)}>Plus</button>
            {el.value}
            <button onClick={() => decrementMinus(el.id)}>Minus</button>
            <button onClick={() => deleteCounter(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addCounters}>Add counters </button>
    </div>
  );
};

export default App;
