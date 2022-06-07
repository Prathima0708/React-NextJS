import React from 'react'
import { Footer } from './Footer/Footer'
import NavBar from './Navbar/NavBar'


const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout