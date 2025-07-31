import React from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import Header from './home/Header'

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default AdminLayout