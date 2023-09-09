import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainCom = () => {
  return (
     <>
        <Navbar/>
        <Outlet/>
     </>
  )
}

export default MainCom