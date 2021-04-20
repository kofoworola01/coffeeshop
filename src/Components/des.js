import React from 'react'
import { Link } from 'react-router-dom'
import coffee from '../img/coffee_a.jpg'

export default function Des() {
    return (
        <div className='des'>
            <div className='des-image'>
                <img src={coffee}></img>
            </div>
            <div className='des-content'>
                <div>
                    <h1>COFFE LATTE</h1>
                    <p>We believe a cup of coffee is one of the most important simple pleasures of life Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores odit rem nulla architecto suscipit ipsam doloribus nisi magni incidunt, a, temporibus earum voluptas! Soluta, blanditiis assumenda? Aliquid, blanditiis iste?</p>
                    <div className='line'></div>
                    <div className='des-price'>&#8358;5000</div>
                    <div className='line'></div>
                    <div className='qty'>
                        <span style={{ marginRight: '10px'}}>Quantity :</span>
                        <table>
                            <tr>
                                <td>-</td>
                                <td>1</td>
                                <td>+</td>
                            </tr>
                        </table>
                    </div>
                    <div className='line'></div>
                    <button className='des-btn'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
