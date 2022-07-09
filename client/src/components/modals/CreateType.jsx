import React, {useState} from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { addType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
  const [typeName, setTypenName] = useState('')

  const addTypeHandler = async () => {
    const response = await addType(typeName)
    console.log(response)
    setTypenName('')
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
        <Modal.Title id="contained-modal-title-vcenter">Add type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={typeName} onChange={(e) => setTypenName(e.target.value)} laceholder={"Type a name..."} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={addTypeHandler}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
