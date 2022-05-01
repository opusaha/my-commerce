import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,product) => total + product.price, 0)
    const shippingCost = cart.reduce((shippingCost,product) => shippingCost + product.shipping, 0)
    const totalBeforeTax = total + shippingCost;
    let tax = 0;
    if (total > 200){
        tax = total * .15;
    } else if (total > 100){
        tax = total * .1;
    }
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items Ordered : {cart.length}</p>
            <p>Price {total.toFixed(2)}</p>
            <p>Shipping Cost : {shippingCost.toFixed(2)}</p>
            <p>Total before Tax : {totalBeforeTax.toFixed(2)}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>total : {(totalBeforeTax + tax).toFixed(2)}</p>
            <button className='cart-btn'>Proceed to Checkout<FontAwesomeIcon icon={faRightLong} /></button>
        </div>
    );
};

export default Cart;