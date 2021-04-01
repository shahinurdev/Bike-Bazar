import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  const [bikes, setBikes] = useState([]);
  console.log('check all bikes',bikes);

  useEffect(() => {
      fetch('http://localhost:3005/allbikes')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])
  
    return (
        <div className="home">
           {
                bikes.map(bike =>
           
             <Card className="m-5 border-0 shadow card">
      <Row className="row">
        <Col>
          <Card.Img style={{height: '100px'}} src={bike.imgeURL} />
        </Col>
        <Col className="column">
          <Card.Body>
            <Card.Title >
              Model: {bike.model}
            </Card.Title>
            <Card.Text >
             price: ${bike.price}
            </Card.Text>
          </Card.Body>
          <Link  to={"/checkout/"+bike._id} className="btn btn-primary bike-btn">Buy Now</Link>
        </Col>
      </Row>
    </Card>    
    )}
        </div>
    );
};

export default Home;