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
  
  const [counters, setCounters] = useState(0);
  const incrementPlus = () => {
        const updatedCounts = counters.map(el=>
          el.id===id ?{...el,value:e.value}:el)
          setCounters(updatedCounts)
  };
  const decrementMinus = () => {
    setCounters(counters - 1);
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li>
            <button onclick={()=>incrementPlus()}>Plus</button>
            {counters}
            <button onclick={()=>decrementMinus()}>Plus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
