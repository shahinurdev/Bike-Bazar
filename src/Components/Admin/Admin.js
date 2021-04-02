import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Delete from '../Delete/Delete';
import "./Admin.css";

const Admin = () => {
    const { register, handleSubmit} = useForm();
    const [imgUrl, setImgUrl]= useState(null)
    const onSubmit = data => {
        const eventData = { 
            model: data.name, 
            imgeURL: imgUrl,
            price:data.price
        }
        
       const url = `http://localhost:3005/addBike`
       fetch(url,{
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(eventData)
       })
       .then(res =>console.log(res))
    };
    const handleImgUpload = event =>{
        const imgData = new FormData();
        imgData.set('key','a3d146b234f1029ed4d3460f8b963d30')
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
    imgData)
    .then(function (response) {
        setImgUrl(response.data.data.display_url);

    })
    .catch(function (error) {
      console.log(error);
    });
    }
    const [bikes, setBikes] = useState([]);
  

  useEffect(() => {
      fetch('https://rhubarb-cupcake-17446.herokuapp.com/allbikes')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])

    return (
        <div className='container'>
            <div className="row admin-row">
                <div className="col-md-6 pt-3">
                <h5 className="bikes-add"> <strong>Bikes Add</strong> </h5>
               
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                  <label htmlFor="name">Bike Name</label>
                <input className="form-control" name="name" defaultValue="ModelName" ref={register} />
                </div>

                <div className="form-group">
                <label htmlFor="price">price</label>
                <input  className="form-control" name="price" defaultValue="Price" ref={register} />
                </div>

                <div className="form-group">
                <label htmlFor="name">Add Bike Photo</label>
                <input className="form-control-file" name="file" type="file" onChange={handleImgUpload}/>
                </div>
                
                <input className="btn btn-success" type="submit" value='Save' /> 
              </form>
              </div>

              <div className="col-md-6 pt-2 border-left ">
              <h5 className="manage-bikes"> <strong>Manage Bikes</strong> </h5>
              {
                  bikes.map(bike=><Delete bike={bike}></Delete>)
              }
             </div>
              </div>
        </div>
    );
};

export default Admin;