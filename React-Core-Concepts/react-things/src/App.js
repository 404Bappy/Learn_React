import logo from './logo.svg';
import './App.css';

function App() {
 

  return (
    <div className="App">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
    </div>
  );
}

function Person(){
  return(
     <div className="Person">
        <h1>Name: Arfat Bappy</h1>
        <h4>Profession: Footballer</h4>
        <h6>Age : 26</h6>
     </div>
  );
}

export default App;
