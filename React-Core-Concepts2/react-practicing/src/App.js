import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : 'mobile', price : '500$'},
    {name : 'Laptop', price : '1000$'},
    {name : 'AirBud', price : '500$'},
    {name : 'HUB', price : '500$'},
    {name : 'SmartWatch', price : '500$'},
    {name : 'astst', price : '500$'}
    
  ]


  return (
    <div className="App">
      
      {
        products.map(product => <Product name = {product.name}  price ={product.price}></Product>)
      }
      
      
      {/* <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product> */}
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
