import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product Name="iphone" ></Product>
    </div>
  );
}


function Product(props) {
  return (
    <div className ="Product">
      <h2>Name : {props.name}</h2>
      <h2>Price : {props.price}</h2>
    </div>

  )

}

export default App;
