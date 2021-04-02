import React from 'react';
import './Delete.css';

const Delete = (props) => {
    const{model,price,_id}= props.bike;
    const deleteBike=(id)=>{
        fetch(`https://rhubarb-cupcake-17446.herokuapp.com/deleteBike/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               }
        })
        .then(res=> res.json())
        .then(data=>{
             console.log(data)
        })

    }
    
    return (
        
        <div className="row delete-row">
            <div className="col-md-6">
            <h3>Name:{model}</h3>
            <p>Price: ${price}</p>
            <button className='btn btn-danger' onClick={() =>deleteBike(_id)}>Delete</button>
            </div>
        </div>
       
    );
};

export default Delete;