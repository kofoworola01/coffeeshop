import React from 'react'
// import coffee from '../img/coffee_a.jpg'
import { datas } from './datas'

export default function Menu(props) {
    return (
        <div className='menu-page'>
            <h1 className='center' style={{ margin: '30px' }}>Menu</h1>
            <div className='item-container'>
                {datas.map(product => {
                    return (
                        <div className="items">
                            <div className='item-box'>
                                <div className="card">
                                    <img src={product.img} style={{ width: "100%" }}></img>
                                    <h1 style={{ color: 'black' }}>{product.name}</h1>
                                    <p className="price">&#8358;{product.price}</p>
                                    {/* <p style={{color: 'black'}}>We believe a cup of coffee is one of the most important simple pleasures of life</p> */}
                                    <p><button onClick={() => props.addToCart(product)}>Add to Cart</button></p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
