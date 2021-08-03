import React from "react";
import { datas } from "./datas";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="menu-page" style={{ background: "#ffff" }}>
      <h1 className="center" style={{ margin: "30px", color: "black" }}>
        Menu
      </h1>
      <div className="item-container">
        {datas.map((product) => {
          return (
            <div>
              <div className="item-box">
                <div className="card">
                  <Link to={{ pathname: "/des", query: { product } }}>
                    <img
                      src={product.img}
                      style={{ width: "100%" }}
                      alt=""
                    ></img>

                    <h1 style={{ color: "black" }}>{product.name}</h1>
                    <p className="price">&#8358;{product.price}</p>
                  </Link>
                  {/* <p style={{color: 'black'}}>We believe a cup of coffee is one of the most important simple pleasures of life</p> */}
                  <p>
                    <button onClick={() => props.addToCart(product)}>
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
