import React, { useState } from "react";

const App = () => {
  const initialCounters = [
    { id: 123, value: 10 },
    { id: 124, value: 10 },
    { id: 125, value: 10 },
  ];
  const [counters, setCounters] = useState(0);

  const increment = () => {
    setCounters(counters + 1);
  };
  const decrement = () => {
    setCounters(counters - 1);
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={() => increment()}>Plus</button>
            {el.value}
            <button onClick={() => decrement()}>Minus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
