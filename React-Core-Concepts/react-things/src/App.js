import logo from './logo.svg';
import './App.css';

function App() {
        const number = 454545;
        const singer ={
          name:  'Rahat Fathe Ali Khan',
          Job: 'Singer',
          Age: 40
        }

        const singer2 = {
          name: 'Atif Aslam',
          Job : 'singer',
          Age : 44,
          song : 'Kuch Istarha'
        }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello There !</h3>
        <p>This Is  Arafat Bappy. Im Currently Learning React. And Im Going To Be A Software Developer InshaAllah...!!!!</p>
        <div className="Container">
            <h5>This the section where im gonna to write my code</h5>
            <p>My Number : {number}</p>
            <p>Singer: {singer.name + ' ' +singer.Job +' ' +singer.Age}</p>
            <p>Real singer : {singer2.name + ' '+ singer2.Age +' '+ singer2.Job + ' '+ singer2.song}</p>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
