import logo from './logo.svg';
import './App.css';

function App() {

  const BarcaPlayers = ["Pedri", "Gavi", "Fati", "Stegan", "Dembele","Kunde"];

  const Positions = [
    {player : 'Pedri', position : "CMF"},
    {player : 'Gavi', position : "AMF"},
    {player : "Fati", position : "SS"},
    {player : "Stegan", position : "GK"},
    {player : "Dembele", position: "LWF"},
    {player : "Kunde", position : "RB"}
  ]


  return (
    <div className="App">
       <ul>
         {
           BarcaPlayers.map( player => <li>{player}</li>)
         }
       </ul>

       <ul>
         {
           Positions.map(Position => <Barca player ={Position.player} position ={Position.position}></Barca>)
         }
       </ul>
        

 
            


      <Person Name="BAPPY" Job="Footballer"></Person>
      <Person Name="BASHAR" Job="Cricketer"></Person>
      <Person Name="KHAIRUL" Job="Body-Builder"></Person>
      <Person Name="ARAFAT" Job="Developer"></Person>

      <Car CarName="Audi" Color="RED" Registration_Year="2019"></Car>
      <Car CarName="BMW" Color="Yellow" Registration_Year="2011"></Car>
      <Car CarName="MUSTANK" Color="BLUE" Registration_Year="2015"></Car>
      <Car CarName="FORD" Color="GREEN" Registration_Year="2018"></Car>
      <Car CarName="THAR" Color="PINK" Registration_Year="2022"></Car>
      <Car CarName="HONDA" Color="BLACK" Registration_Year="2021"></Car>



       

    </div>
  );
}

function Person(props) {
  return (
    <div className="Person">
      <h1>Name: {props.Name}</h1>
      <h4>Profession: {props.Job}</h4>
    </div>
  );
}

function Car(props) {
  return (
    <div className="Car">
      <h1>Car Name : {props.CarName} </h1>
      <h2>Color : {props.Color}</h2>
      <h3>Registration_Year :{props.Registration_Year}</h3>

      <h3></h3>
      <h5></h5>
    </div>
  )
}

function Barca(props){
  return(
    <div className ="Barca">
       <h1>Player Name : {props.player}</h1>
       <h2>Position : {props.position}</h2>
    </div>
  )
}

export default App;
