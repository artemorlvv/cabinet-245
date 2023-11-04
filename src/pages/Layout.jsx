import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../widgets/Header'
import Footer from '../widgets/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex grow'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout