import React from "react";
import './index.css'

const Cartlist = ({ cart, incrementqty, decrementqty }) => {
  console.log(cart);
  return (
    <div className='wrapper'>
      {cart.map((c) => {
        return (
          <>
            <div className="sub-wrapper">
              <div className="cart-image">
                <img src={c.img} alt="" />
              </div>
              <div className="des-content">
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                  <div className="cart-price">&#8358;{c.price}</div>
                  <div className="quantity">
                    <span style={{ marginRight: "10px" }}>Quantity :</span>
                    <table>
                      <tr>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() => decrementqty(c.id)}
                        >
                          -
                        </td>
                        <td>{c.qty}</td>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() => incrementqty(c.id)}
                        >
                          +
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </>
        );
      }) 
    }
    </div>
  );
};

export default Cartlist;
