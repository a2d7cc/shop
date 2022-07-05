import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <Container className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600}} className="p-5">
        <h2 className='mx-auto'>{isLogin ? 'Authorisation' : 'Registration'}</h2>
      <Form className='d-flex flex-column'>
        <Form.Control className='mt-3' placeholder='Type your email..' />
        <Form.Control className='mt-3' placeholder='Type your password..' />
        <Row className='d-flex justify-content-between mt-3 ps-3 pe-3'>
           {isLogin ?  <div>Doesn't have account? <NavLink to="/registration">Register!</NavLink></div> : 
            <div>Have account? <NavLink to="/login">Login!</NavLink></div>}
        <Button  variant='outline-success'>{isLogin ? 'Login' : 'Registration'}</Button>
        </Row>
    </Form>
      </Card>
    </Container>
  )
}

export default Auth