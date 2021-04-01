import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './Header.css';

const Header = () => {
    return (
        <div>
         <div class="header">
            <h1 class="logo">Bike Bazar</h1>
            <div class="header-right">
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="deals">Deals</Link>
            </div>
        </div>
        </div>
    );
};

export default Header;