import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home-page'>
            <div className='home'>
            <h1 className='center'>LIFE IS BETTER WITH COFFEE</h1>
            <p className='center'><i>We believe a cup of coffee is one of the most important simple pleasures of life</i></p>
            <div className='menu'><Link to='/menu'>see our menu</Link></div>
            </div>
        </div>
    )
}
