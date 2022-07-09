import React, {useState} from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import {  useNavigate, NavLink, useLocation } from 'react-router-dom'
import { registration, login } from '../http/userAPI'
import { observer } from "mobx-react-lite";
import { Context } from '../index';
import { useContext } from "react";


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === '/login'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const makeAuth = async () => {
    try {
      let data;
      if(isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
  
      }      
      user.setUser(data)
      user.setIsAuth(true)
  
      navigate(location?.state || '/shop')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600}} className="p-5">
        <h2 className='mx-auto'>{isLogin ? 'Authorisation' : 'Registration'}</h2>
      <Form className='d-flex flex-column'>
        <Form.Control value={email}  onChange={(e) => setEmail(e.target.value)} className='mt-3' placeholder='Type your email..' />
        <Form.Control value={password}  onChange={(e) => setPassword(e.target.value)} type='password' className='mt-3' placeholder='Type your password..' />
        <Row className='d-flex justify-content-between mt-3 ps-3 pe-3'>
           {isLogin ?  <div>Doesn't have account? <NavLink to="/registration">Register!</NavLink></div> : 
            <div>Have account? <NavLink to="/login">Login!</NavLink></div>}
        <Button  onClick={makeAuth} variant='outline-success'>{isLogin ? 'Login' : 'Registration'}</Button>
        </Row>
    </Form>
      </Card>
    </Container>
  )
})

export default Auth