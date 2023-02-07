import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);

  return (
    <div className="App">
      <h3>My steps : {steps}</h3>
      <button>Walk</button>
      <Device name="PHone" Price="10k" />
    </div>
  );
}

export default App;
