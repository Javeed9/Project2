import React from 'react'
import PriceHeader from './Components/PriceHeader/PriceHeader'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (
    <>
      <PriceHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout