import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

constructor(){
    super();
    this.state =
         {
     products :[
        {
        price:99,
        title:'Watch',
        qty:1,
        img:'https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id:1
     },

     {
        price:999,
        title:'Mobile Phone',
        qty:1,
        img:'https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id:2
     },
     {
        price:999,
        title:'Laptop',
        qty:1,
        img:'https://img.freepik.com/free-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?w=740&t=st=1676397952~exp=1676398552~hmac=2337c985b5d835eca472cd82956db69ad9338aa5868f49a86f45d4b9ec6d265e',
        id:3

     }
    ]
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity = (product) =>{
    // console.log("Hey please inc the qty of",product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;

    this.setState({
      products
    })
      }

      handleDecreaseQuantity = (product) =>{
        // console.log("Hey please inc the qty of",product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if( products[index].qty === 0){
          return;
        }

        products[index].qty -=1;

        this.setState({
          products
        })
      }

      handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
          products:items
        })
      }
      getCartCount =() => {
        const {products} = this.state;

        let count =0;

        products.forEach((product) => {
          count += product.qty;
        });
        return count;
      }

     getCartTotal =() =>{
        const{products} = this.state;

        let cartTotal = 0;

        products.map((product) =>{
          cartTotal = cartTotal + product.qty * product.price;
        })
        return cartTotal;
      }


  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count ={this.getCartCount()}/>
        <Cart
        products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct} />
         <div style = {{padding: 10,frontSize: 20}}>Total :{this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
