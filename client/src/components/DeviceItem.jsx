import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import star from '../assets/rating-icon.svg'

const DeviceItem = ({device}) => {
  return (
    <Col md={3} className="mt-3">
        <NavLink to={`/device/${device.id}`} >
        <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
            <Image width={150} height={150} src={device.img} />
            <div className='text-black mt-1 d-flex justify-content-between align-items-center'>
               <div>Samsung</div> 
               <div className='d-flex  align-items-center'>
                <div>{device.rating}</div>
                <Image width={18} height={18} src={star} />
               </div>
            </div>
            <div>{device.name}</div>
        </Card>
        </NavLink>
    </Col>
  )
}

export default DeviceItem