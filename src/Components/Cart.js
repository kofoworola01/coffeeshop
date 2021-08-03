import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ count }) {
  return (
    <>
      <div className="cart-wrapper">
        <FontAwesomeIcon icon={faShoppingCart} size="x" />
        <span className="cart-count">{count}</span>
      </div>
      
    </>
  );
}
