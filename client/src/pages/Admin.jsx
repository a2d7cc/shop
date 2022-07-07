import React,  { useState }  from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
      <Container className='d-flex flex-column'>
        <Button variant={"outline-dark"} className="mt-2 p-3" onClick={() => setTypeVisible(true)}>Add Type</Button>
        <Button variant={"outline-dark"} className="mt-2 p-3" onClick={() => setBrandVisible(true)}>Add Brand</Button>
        <Button variant={"outline-dark"} className="mt-2 p-3" onClick={() => setDeviceVisible(true)}>Add Device</Button>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      </Container>
    )
}

export default Admin