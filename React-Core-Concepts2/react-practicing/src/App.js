import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : 'mobile', price : '500$' ,cashback : "26%"},
    {name : 'Laptop', price : '1000$' ,cashback : "26%"},
    {name : 'AirBud', price : '500$' ,cashback : "26%"},
    {name : 'HUB', price : '500$', cashback : "26%"},
    {name : 'SmartWatch', price : '500$' , cashback : "26%"},
    {name : 'astst', price : '500$' , cashback : "26%"}
    
  ]


  return (
    <div className="App">
      
      {
        products.map(product => <Product name = {product.name}  price ={product.price} cashback = {product.cashback}></Product>)
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
      <h3>Cash Back : {props.cashback}</h3>
    </div>

  )

}

export default App;
