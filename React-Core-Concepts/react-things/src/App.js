import logo from './logo.svg';
import './App.css';

function App() {
 

  return (
    <div className="App">
        <Person Name = "BAPPY" Job = "Footballer"></Person>
        <Person Name = "BASHAR" Job = "Cricketer"></Person>
        <Person Name = "KHAIRUL" Job = "Body-Builder"></Person>
        <Person Name = "ARAFAT" Job = "Developer"></Person>
       
       <Car Name = "Audi" ></Car>

        <Car></Car>

    </div>
  );
}

function Person(props){
  console.log(props);
  return(
     <div className="Person">
        <h1>Name: {props.Name}</h1>
        <h4>Profession: {props.Job}</h4>
     </div>
  );
}

function Car(){
  return(
    <div className = "Person">
      <h1>Car Name : Audi</h1>
      <h3>Color : RED</h3>
      <h5>Registration Year : 2019</h5>
      <h6>Price : 98,00000</h6>
    </div>
  )
}

export default App;
