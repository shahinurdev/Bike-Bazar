import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    console.log('orders',orders);
    useEffect(() =>{
        fetch('https://rhubarb-cupcake-17446.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data =>setOrders(data))
    },[])
    return (
        <div className="container">
            <h3>Name: {loggedInUser.displayName}</h3>
            <h3>Your Email: {loggedInUser.email}</h3>
            <h4>You Have {orders.length} Orders</h4>
            {
                orders.map(order =>
                   
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Bike Mode: {order.order.singleBike.model}</li>
                    <li className="list-group-item">Price: {order.order.singleBike.price}</li>
                    <li className="list-group-item">Order Time: {order.orderTime}</li>
                </ul>
            </div>

            )}
        </div>
    );
};

export default Orders;