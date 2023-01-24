import logo from './logo.svg';
import './App.css';

function App() {
  const Crickters = [
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"},
    {name : "Sakib Al Hasan", Nationality : "Bangladeshi" , Bidding_Price : "10 lakh"}
  ]
  
  
  
  
  
  // const products = [
  //   {name : 'mobile', price : '500$' ,cashback : "26%"},
  //   {name : 'Laptop', price : '1000$' ,cashback : "26%"},
  //   {name : 'AirBud', price : '500$' ,cashback : "26%"},
  //   {name : 'HUB', price : '500$', cashback : "26%"},
  //   {name : 'SmartWatch', price : '500$' , cashback : "26%"},
  //   {name : 'astst', price : '500$' , cashback : "26%"}
    
  // ]


  return (
    <div className="App">

    {
      Crickters.map(cricketer => <Cricketer name = {cricketer.name} Nationality = {cricketer.Nationality} Bidding_Price = {cricketer.Bidding_Price} ></Cricketer>)
    }




      {/* {
        products.map(product => <Product name = {product.name}  price ={product.price} cashback = {product.cashback}></Product>)
      } */}
      
      
      {/* <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product>
      <Product name="iphone-12" price = "600$" ></Product> */}
    </div>
  );
}


function Cricketer(props) {
  return (
    <div className ="Product">
      <h2>Name : {props.name}</h2>
      <h2>Bidding_Price : {props.Bidding_Price}</h2>
      <h3>Nationality : {props.Nationality}</h3>
    </div>

  )

}

export default App;
