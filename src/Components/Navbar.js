import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav className='nav-container'>
                <div>
                    <a className='title'>COFFEE</a>
                    <ul >
                        <li className='nav-links'><Link to='/'>Home</Link></li>
                        <li className='nav-links'><Link to='/menu'>Menu</Link></li>
                        <li className='nav-links'><Link to='/location'>Locations</Link></li>
                        <li className='nav-links'><Link to='/contact'>Contact Us</Link></li>
                        {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
                        {/* <li className='nav-links'><Link to='sidebar'>HHHHH</Link></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
