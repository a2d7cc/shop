import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import ratingBigIcon from '../assets/rating-big-icon.png'

const Device = () => {
  const device = {id: 1, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`}
  const description = [
    {id: 1, title:'RAM memory', description: '5gb'},
    {id: 2, title:'Camera', description: '5mpx'},
    {id: 3, title:'CPU', description: '2400 Ghz'},
    {id: 4, title:'Graphic Card', description: 'Geforece 2Gb'},
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{textAlign: 'center'}}>{device.name}</h2>
            <div style={{width: 240, height: 240, background: `url(${ratingBigIcon}) no-repeat center center`, backgroundSize: 'cover', fontSize: 54 }}
                  className="d-flex justify-content-center align-items-center">
                    {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
            <h3>From {device.price} Euro</h3>
            <Button variant={"outline-dark"}>Add to a basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Description</h2>
        {description.map((info, index) => 
        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
        </Row>)}
      </Row>
    </Container>
  );
};

export default Device;
