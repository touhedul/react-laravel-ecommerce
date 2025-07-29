import React from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout