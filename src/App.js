import React, { useState } from "react";

const App = () => {
  const initialCounters = [
    { id: 123, value: 10 },
    { id: 124, value: 10 },
    { id: 125, value: 10 },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const increment = (id) => {
        const updatedCounts = counters.map(el=>
          el.id===id ?{...el,value:el.value + 1}: el)
          setCounters(updatedCounts)
  };
  const decrement = (id) => {
     const updatedCounts = counters.map(el=>
      el.id===id?{...el,value:el.value - 1}:el)
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li key={el.id}>
            <button onClick={() => increment(el.id)}>Plus</button>
            {el.value}
            <button onClick={() => decrement()}>Minus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
