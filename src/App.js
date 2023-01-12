import React, { useState } from "react";
import "./index.css";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const changePlus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button>Minus</button>
      {count}
      <button onClick={() => changePlus()}>Plus</button>
    </div>
  );
};

export default App;
