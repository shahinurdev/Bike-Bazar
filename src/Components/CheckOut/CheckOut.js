import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Checkout.css'

const CheckOut = () => {
    const [loggedInUser] = useContext(UserContext);
    const { handleSubmit } = useForm();
    const {id}= useParams();
    const [singleBike,setSingleBike]= useState({});
    useEffect(()=>{
        fetch('https://rhubarb-cupcake-17446.herokuapp.com/selectedBike/'+id)
        .then(res=>res.json())
        .then(data=>setSingleBike(data))
    },[id]);
    const onSubmit = data => {
        const orderDetails = {...loggedInUser,order: {singleBike},orderTime:new Date()}
        fetch('http://localhost:3005/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
      
          })
          .then(res=>res.json())
          .then(data =>{
            if(data){
              alert('Order Successfully Done')
            }
          })


    }

    return (
        <div className="container checkout-main ">   
        <h3>CheckOut</h3>
            <div className="row border-bottom row-checkout">
             <div className="col-6">
            <p>Name</p>
            </div>
            <div className="col-6">
           <p>Price</p>
           </div>
           </div>

            <div className="row border-bottom row-checkout">
             <div className="col-6">
            <p>{singleBike.model}</p>
            </div>
            <div className="col-6">
           <p>${singleBike.price}</p>
           </div>
           </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="submit" value="CheckOut" />
     </form>
        </div>
    );
};

export default CheckOut;