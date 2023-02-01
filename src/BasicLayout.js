
import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Header'

const BasicLayout = ({children}) => {
  return (
    <div>
    <Navbar />
    <div>{children}</div>
    <Footer/>
    </div>
  )
}

export default BasicLayout;