import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Delete from '../Delete/Delete';

const Admin = () => {
    const { register, handleSubmit} = useForm();
    const [imgUrl, setImgUrl]= useState(null)
    const onSubmit = data => {
        const eventData = { 
            model: data.name, 
            imgeURL: imgUrl,
            price:data.price
        }
        console.log(eventData);
       const url = `http://localhost:3005/addBike`
       fetch(url,{
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(eventData)
       })
       .then(res =>console.log('server side respo',res))
    };
    const handleImgUpload = event =>{
        const imgData = new FormData();
        imgData.set('key','a3d146b234f1029ed4d3460f8b963d30')
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
    imgData)
    .then(function (response) {
        console.log(response.data.data.display_url);
        setImgUrl(response.data.data.display_url);

    })
    .catch(function (error) {
      console.log(error);
    });
    }
    const [bikes, setBikes] = useState([]);
  console.log('check all bikes',bikes);

  useEffect(() => {
      fetch('http://localhost:3005/allbikes')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])

    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="ModelName" ref={register} /><br/>
                <input name="price" defaultValue="Price" ref={register} /><br/>
                <input name="exampleRequired" type="file" onChange={handleImgUpload}/><br/>
                <input type="submit" />
              </form>
              <br/>
              {
                  bikes.map(bike=><Delete bike={bike}></Delete>)
              }
              
        </div>
    );
};

export default Admin;