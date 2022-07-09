import React, { useContext, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { addDevice } from "../../http/deviceAPI";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)
  const [file, setFile] = useState(null)



  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const changeInfo = (key, value, number) => {
    setInfo([...info.map(i => i.number === number ? {...i, [key]: value} : i)])
  }

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const addDeviceHandler = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('file', file)
    formData.append('brandId', brand.id)
    formData.append('typeId', type.id)
    formData.append('info', JSON.stringify(info))

    addDevice(formData).then(data => {
      setInfo([])
      setName('')
      setPrice(0)
      setBrand(null)
      setType(null)
      setFile(null)
      onHide()})
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{type?.name || 'Choose a type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item onClick={e => setType(type)} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{brand?.name || 'Choose a brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item onClick={e => setBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control value={name} onChange={e => setName(e.target.value)} className="mt-3" placeholder="Type a name of device" />
          <Form.Control
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="mt-3"
            placeholder="Type a price of device"
            type="number"
          />
          <Form.Control onChange={e => setFile(e.target.files[0])} className="mt-3" type="file" />
          <Button className="mt-3" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control value={i.title} onChange={e => changeInfo('title', e.target.value, i.number)} placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <Form.Control value={i.description} onChange={e => changeInfo('description', e.target.value, i.number)} placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Close
        </Button>
        <Button variant={"outline-success"} onClick={addDeviceHandler}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
