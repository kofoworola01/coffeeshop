import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default function Navbar() {
    return (
        <div>
            <nav className='nav-container'>
                <div>
                    <Link to= '/' className='title'>COFFEE</Link>
                    <ul >
                        <li className='nav-links'><Link to='/'>Home</Link></li>
                        <li className='nav-links'><Link to='/menu'>Menu</Link></li>
                        <li className='nav-links'><Link to='/location'>Locations</Link></li>
                        <li className='nav-links'><Link to='/cart'><Cart /></Link></li>
                        <li className='nav-links'><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
