import React from 'react';

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
        <div>
            <h3>Name:{model}</h3>
            <p>Price: ${price}</p>
            <button onClick={() =>deleteBike(_id)}>Delete</button>
        </div>
    );
};

export default Delete;