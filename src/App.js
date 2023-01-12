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
  const [count, setCount] = useState(0);

  const changePlus = () => {
    setCount(count + 1);
  };
  const changeMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={() => changeMinus()}>Minus</button>
      {count}
      <button onClick={() => changePlus()}>Plus</button>
    </div>
  );
};

export default App;
