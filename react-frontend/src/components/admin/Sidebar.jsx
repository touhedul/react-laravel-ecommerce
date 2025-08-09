import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (


        <div>

            <nav class="col-md-4 col-lg-3 d-md-block sidebar p-3">
                <ul class="nav flex-column">
                    <li class="nav-item"><Link class="nav-link" to="/admin/dashboard">Dashboard</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/admin/categories">Categories</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/admin/products">Products</Link></li>
                    <li class="nav-item"><a class="nav-link" href="#">Orders</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Users</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Shipping</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Change Password</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Logout</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar