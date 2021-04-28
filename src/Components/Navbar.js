import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default function Navbar(props) {

    // componentDidMount() { 
    //     const toggleCollapse = document.querySelector ('.toggle-collapse span');
    //     const nav = document.querySelector('.nav');

    //     toggleCollapse.onClick = () => {
    //         nav.classList.toggle('collapse');
    //     };
    // }

    return (
        <div>
            <nav className='nav'>
                <div className="nav-menu">
                    <div className="nav-brand">
                        <Link to="#" className="text-black">COFFEE</Link>
                    </div>
                </div>
                <div className="toggle-collapse"  >
                    <div className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className='nav-items'>
                    <li className="nav-link"><Link to='/' className="text-black">Home</Link></li>
                    <li className="nav-link"><Link to='/Menu' className="text-black">Menu</Link></li>
                    <li className="nav-link"><Link to='/Location' className="text-black">Locations</Link></li>
                    <li className="nav-link"><Link to='/Cart' className="text-black"><Cart count={props.count} /></Link></li>
                    <li className="nav-link"><Link to='/Contact' className="text-black">Contact Us</Link></li>
                    
                </ul>
            </nav>

        </div>
    )
}

