
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: 'Small Giants', author: 'bo' },
    { name: 'Build To Sell', author: 'jhon' },
    { name: '100$ Startup', author: 'Chris' },
    { name: ' Grind it', author: 'Ray' },
    { name: 'Shoe Dog', author: 'KUlli kong' },

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
      <Books books={books} />
    </div>
  );
}

export default App;
