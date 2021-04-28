import React, {useState} from 'react'

import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Location from './Components/Location'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import Des from './Components/des'

function App() {
const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
}

 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar count ={cart.length}/>
        <Route exact path='/' component={Home}  />
        <Route path='/menu' render= {() => <Menu  addToCart={addToCart} />}  />
        <Route path='/location' component={Location} />
        <Route path='/contact' component={Contact} />
        <Route path='/des'  render= {(props) => <Des  addToCart={addToCart} {...props} />}/>
      </div>
    </BrowserRouter>

  );
}

export default App;