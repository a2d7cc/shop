import React, {useState} from 'react'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from './index';
import { useEffect } from 'react';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setIsLoading(false))
    }, 1000)
  })

  if(isLoading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  )
})

export default App