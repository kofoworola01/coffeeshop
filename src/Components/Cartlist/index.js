import React from 'react'

const Cartlist = ({ cart, incrementqty, decrementqty }) => {
  console.log(cart)
    return (
        <div>
          {cart.map(c => {
            return (
              <div>
            <div className="des">
        <div className="des-image">
          <img src={c.img} alt=""></img>
        </div>
        <div className="des-content">
          <div>
            <h1>{c.name}</h1>
            <p>{c.description}</p>
            <div className="line"></div>
            <div className="des-price">&#8358;{c.price}</div>
            <div className="line"></div>
            <div className="qty">
              <span style={{ marginRight: "10px" }}>Quantity :</span>
              <table>
                <tr>
                  <td style={{ cursor: "pointer" }} onClick={()=>decrementqty(c.id)}>-</td>
                  <td>{c.qty}</td>
                  <td style={{ cursor: "pointer" }} onClick={()=>incrementqty(c.id)}>+</td>
                </tr>
              </table>
            </div>
            <div className="line"></div>
            <button
              className="des-btn"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
        </div>
            )
          })}
        </div>
    )
}

export default Cartlist
