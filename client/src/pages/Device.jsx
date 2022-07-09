import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import ratingBigIcon from '../assets/rating-big-icon.png'
import { getDevice } from "../http/deviceAPI";


const Device = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      getDevice(id).then(data => {setDevice(data)
        console.log(data)})
  }, [])
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={process.env.react_app_api_url + device.img} width={300} height={300}/>
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
        {device.info.map((info, index) => 
        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
        </Row>)}
      </Row>
    </Container>
  );
};

export default Device;
