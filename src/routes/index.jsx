import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";
import Des from "../Components/des";
import Cartlist from '../Components/Cartlist'

const Routes = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const incrementqty = (id) => {
    const newcart = cart.map(c =>{
      if ( id === c.id) {
        c.qty = c.qty + 1
      }
      return c;
    })
    setCart(newcart);
  };
  const decrementqty = (id) => {
    const newcart = cart.map(c =>{
      if ( id === c.id && c.qty > 0) {
        c.qty = c.qty - 1
      }
      return c;
    })
    setCart(newcart);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar count={cart.length} />
        <Route exact path="/" component={Home} />
        <Route path="/menu" 
        render={() => <Menu addToCart={addToCart} />} 
        />
        <Route path="/contact" component={Contact} />
        <Route
          path="/des"
          render={(props) => <Des addToCart={addToCart} {...props} />}
        />
        <Route path="/cartlist" 
        render={(props) => <Cartlist cart={cart} {...props} incrementqty={incrementqty} decrementqty={decrementqty}/> } 
        />

      </BrowserRouter>
    </>
  );
};

export default Routes;
