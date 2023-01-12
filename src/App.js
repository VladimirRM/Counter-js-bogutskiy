import React,{useState} from 'react'

const App = () => {

  const [count,setCount] = useState(0)

  const plus =()=>{
    setCount(count + 1)
  }
  return (
    <div>
      <button>Minus</button>
      {count}
      <button>Plus</button>
    </div>
  )
}

export default App