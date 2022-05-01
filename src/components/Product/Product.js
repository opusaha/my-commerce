import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, price, img, seller, stock,key } = props.product;
  return (
    <div className="product-area">
      <div className="image-area">
        <img src={img} alt="" />
      </div>
      <div className="text-area">
        <h2>{name}</h2>
        <p>by : {seller}</p>
        <p>${price}</p>
        <p>only {stock} items are available in stock - Order soon</p>
        <button onClick={()=>props.handleAddProduct(props.product)} className="cart-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> 
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
