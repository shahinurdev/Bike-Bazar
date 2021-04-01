import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
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
              alert('Success')
            }
          })


    }


    return (
        <div>   
            Email: {loggedInUser.displayName}
            <h3>Name: {singleBike.model}</h3>
           <p>price: {singleBike.price}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="submit" />
     </form>
        </div>
    );
};

export default CheckOut;