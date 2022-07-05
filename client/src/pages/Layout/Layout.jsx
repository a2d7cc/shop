import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default Layout