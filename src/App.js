import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
// import { Home, Menu, Location, Contact} from './Components/';
import Home from './Components/Home'
import Menu from './Components/Menu'
import Location from './Components/Location'
import Contact from './Components/Contact'
// import Sidebar from './Components/Sidebar'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/location' component={Location} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/sidebar' component ={Sidebar} /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
