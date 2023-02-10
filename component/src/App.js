import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: 'Small Giants', author: 'bo' },
    { name: 'Build To Sell', author: 'jhon' },
    { name: '100$ Startup', author: 'Chris' },
    { name: ' Grind it', author: 'Ray' },
    { name: 'Small Giants', author: 'bo' },

  ]
  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }

  useEffect(() => {
    console.log(steps);
  }, [steps])

  return (
    <div className="App">
      <h3>My steps : {steps}</h3>
      <button onClick={handleIncreaseSteps} style={{ borderRadius: '5px', backgroundColor: 'cadetblue' }}>Walk</button>
      <Device name="PHone" steps={steps} Price="100000" />
    </div>
  );
}

export default App;
