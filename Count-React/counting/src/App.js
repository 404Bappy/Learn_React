import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}

function Counter(){
  return(
    <div className = "Counter">
      <h1>Here is the Counter</h1>
      <button className = "btn">Increse  +</button>
      <br />
      <br />
      <button className = "btn1">Decrese -</button>

    </div>
  )
}

export default App;
