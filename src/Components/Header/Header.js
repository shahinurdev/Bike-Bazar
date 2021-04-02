import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './Header.css';

const Header = () => {
    return (
        <div>
         <div className="header">
            <h1 className="logo">Bike Bazar</h1>
            <div className="header-right">
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