import React, { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState(0);

  const incrementPlus = () => {
    setCounters(counters + 1);
  };
  const decrementMinus = () => {
    setCounters(counters - 1);
  };
  return (
    <div>
      <button onclick={incrementPlus}>Plus</button>
      {counters}
      <button onclick={decrementMinus}>Plus</button>
    </div>
  );
};

export default App;
