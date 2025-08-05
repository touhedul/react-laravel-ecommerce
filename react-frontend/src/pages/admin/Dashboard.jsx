import React from 'react'
import AdminLayout from '../../components/AdminLayout'


const Dashboard = () => {
    return (
        <AdminLayout>

            <main class="col-md-8 ms-sm-auto col-lg-9 px-md-4">
                <div class="row mt-4">
                    <div class="col-md-4 mb-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h3>1</h3>
                                <p>Users</p>
                                <a href="#" class="btn btn-light border">View Users</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h3>1</h3>
                                <p>Orders</p>
                                <a href="#" class="btn btn-light border">View Orders</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h3>1</h3>
                                <p>Products</p>
                                <a href="#" class="btn btn-light border">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </AdminLayout>
    )
}

export default Dashboard