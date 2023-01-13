import React,{useState} from 'react'

const App = () => {

  const [counters,setCounters] = useState(0)

  const incrementPlus =()=>{
    setCounters(counters + 1)
  }
  return (
    <div>
      <button  onclick={incrementPlus}>Plus</button>
      {counters}
      <button  onclick={incrementPlus}>Plus</button>
      
    </div>
  )
}

export default App
