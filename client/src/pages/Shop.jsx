import React from 'react'
import { useContext } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Context } from '../index'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import PageComponent from '../components/Pagination'
import {observer} from "mobx-react-lite";
import { useEffect } from 'react'
import { getAllDevices, getBrands, getTypes } from '../http/deviceAPI'


const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    getTypes().then(data => device.setTypes(data))
    getBrands().then(data => device.setBrands(data))
    getAllDevices(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    getAllDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
  })
  },  [device.page, device.selectedType, device.selectedBrand,])
  
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
            <BrandBar />
            <DeviceList />
            <PageComponent />
          </Col>
      </Row>
    </Container>
  )
})

export default Shop