import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../api/axios';
import { toast } from 'react-toastify';

const Index = () => {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    const getProducts = () => {
        setLoading(true);
        axiosInstance.get('/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const deleteProduct = (productId) => {
        setLoading(true);
        axiosInstance.delete('/products/' + productId)
            .then((response) => {
                getProducts();
                toast.success('Delete successful.');
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <AdminLayout>
            <div className="row mt-4">
                <div className='col-md-8'>

                    <div className='card'>


                        <div className='card-header d-flex justify-content-between'>
                            <h3 className='card-title mb-0'>Products</h3>
                            <Link to="/admin/products/create" className='btn btn-primary'>Add Product</Link>
                        </div>

                        <div className='card-body'>
                            <div class="dashboard-wrapper user-dashboard">

                                {
                                    loading && 'Data is loading'
                                }
                                {
                                    !loading &&

                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>



                                                {
                                                    products && products.map((product) => {
                                                        return (
                                                            <tr key={product.id}>
                                                                <td>{product.title}</td>
                                                                <td>{product.price}</td>
                                                                <td>{product.quantity}</td>
                                                                <td>{product.status == 1 ? 'Active' : 'Disabled'}</td>
                                                                <td><Link to={`/admin/products/edit/${product.id}`} className='btn btn-success'>Edit </Link>

                                                                    <button className='btn btn-danger' onClick={() => deleteProduct(product.id)}>

                                                                        {!loading ? 'Delete' : 'Deleting'}

                                                                    </button></td>
                                                            </tr>
                                                        );
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout >
    )
}

export default Index