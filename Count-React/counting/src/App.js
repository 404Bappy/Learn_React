import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count , setCount] = useState(10); 
 const handleIncrease = () => console.log('Clicked');
  return (
    <div className="Counter">
      <h1>Here is the Counter : {count}</h1>
      <button onClick={handleIncrease()} className="btn">Increse  +</button>
      <br />
      <br />
      <button className="btn1">Decrese -</button>

    </div>
  )
}

export default App;
