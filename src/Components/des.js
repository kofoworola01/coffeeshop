import React from 'react'


export default function Des(props) {

    const product = props.location.query.product;
    return (
        <div>
            <h1 className='center' style={{ margin: '30px' }}>Description</h1>
            <div className='des'>
                <div className='des-image'>
                    <img src={product.img}></img>
                </div>
                <div className='des-content'>
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <div className='line'></div>
                        <div className='des-price'>&#8358;{product.price}</div>
                        <div className='line'></div>
                        <div className='qty'>
                            <span style={{ marginRight: '10px' }}>Quantity :</span>
                            <table>
                                <tr>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>+</td>
                                </tr>
                            </table>
                        </div>
                        <div className='line'></div>
                        <button className='des-btn' onClick={() => props.addToCart(product)}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
