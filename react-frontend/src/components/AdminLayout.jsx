import React from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import Header from './home/Header'
import '../components/css/AdminDashboard.css'
import Sidebar from './admin/Sidebar'

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div class="container mt-20">
                <div class="row">
                    <Sidebar />
                    {children}
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default AdminLayout