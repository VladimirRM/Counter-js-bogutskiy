import React,{useState} from 'react';
import './App.css';

function App() {

const [counter,setCounter]= useState( 5)



  return (
    <div className="App">
       {counter}
       <button onClick={changeCount}></button>
    </div>
  );
}

export default App;
