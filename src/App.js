import React, { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState(0);

  const increment =()=>{
    setCounters(counters + 1)
  }
  const decrement =()=>{
    setCounters(counters - 1)
  }
  return (
    <div>
      <button onClick={() => increment()}>Plus</button>
      {counters}
      <button onClick={() => decrement()}>Minus</button>
    </div>
  );
};

export default App;
