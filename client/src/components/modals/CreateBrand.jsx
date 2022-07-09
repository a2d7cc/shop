import React, {useState} from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { addBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [brandName, setBrandName] = useState('')

  const addBrandHandler = async () => {
    const response = await addBrand(brandName)
    setBrandName('')
    onHide()
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
        <Modal.Title id="contained-modal-title-vcenter">Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={brandName} onChange={e => setBrandName(e.target.value)} placeholder={"Type a name..."} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={addBrandHandler}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
