import React from 'react';
import logo from '../../src/images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="./shop">Shop</a>
                <a href="./order">Order</a>
                <a href="./inventory">My Inventory</a>
            </nav>
        </div>
    );
};

export default Header;