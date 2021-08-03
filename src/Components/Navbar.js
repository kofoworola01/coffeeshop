import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default function Navbar({count, bgColor, textColor}) {

    return (
        <div style={{background: `${bgColor}`}}>
            <nav className='nav'>
                <div className="nav-menu">
                    <div className="nav-brand">
                        <Link to="#" style={{color: `${textColor || 'gold'}`}}>COFFEE</Link>
                    </div>
                </div>
                
                <ul className='nav-items'>
                    <li className="nav-link"><Link to='/' style={{color: `${textColor || 'gold'}`}}>Home</Link></li>
                    <li className="nav-link"><Link to='/Menu' style={{color: `${textColor || 'gold'}`}}>Menu</Link></li>
                    <li className="nav-link"><Link to='/cartlist' style={{color: `${textColor || 'gold'}`}}><Cart count={count} /></Link></li>
                    <li className="nav-link"><Link to='/Contact' style={{color: `${textColor || 'gold'}`}}>Contact Us</Link></li>
                </ul>
            </nav>

        </div>
    )
}

