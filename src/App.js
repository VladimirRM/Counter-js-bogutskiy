import React, { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState(0);
  return <div>


      <button onClick={()=>increment()}>Plus</button>
      {counters}
      <button onClick={()=>decrement()}>Minus</button>

  </div>;
};

export default App;
