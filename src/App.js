import React,{useState} from 'react';
import './App.css';

function App() {

const [counter,setCounter]= useState( 5)

const changeCount = ()=>{
  setCounter(counter+1)
}

  return (
    <div className="App">
       {counter}
       <button onClick={changeCount}>Plus</button>
       <button onClick={changeCount}>Plus</button>
    </div>
  );
}

export default App;
