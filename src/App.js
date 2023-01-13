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
        const updatedCounts = counters.map(el=>
          el.id===id ?{...el,value:el.value +1 }:el)
          setCounters(updatedCounts)
  };
  const decrementMinus = (id) => {
    const updatedCounts = counters.map(el=>
      el.id===id ?{...el,value:el.value - 1 }:el)
      setCounters(updatedCounts)
  };
  return (
    <div>
      <ul>
        {counters.map((el) => (
          <li>
            <button onclick={()=>incrementPlus(el.id)}>Plus</button>
            {counters}
            <button onclick={()=>decrementMinus(el.id)}>Plus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
