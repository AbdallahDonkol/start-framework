import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
    {/* any component to change */}
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" className="content" style={{minHeight:'483px'}}>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
