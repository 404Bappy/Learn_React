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
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }





  return (
    <div className="Counter">
      <h1>Here is the Counter : {count}</h1>
      <button onClick={handleIncrease} className="btn">Increse  +</button>
      <br />
      <br />
      <button onClick={handleDecrease} className="btn1">Decrese -</button>

    </div>
  )
}

export default App;
