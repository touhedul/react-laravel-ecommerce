import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../api/axios';
import { toast } from 'react-toastify';

const Index = () => {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const getCategories = () => {
        setLoading(true);
        axiosInstance.get('/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const deleteCategory = (categoryId) => {
        setLoading(true);
        axiosInstance.delete('/categories/' + categoryId)
            .then((response) => {
                getCategories();
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
        getCategories();
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
                                                    <th>Name</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>



                                                {
                                                    categories && categories.map((category) => {
                                                        return (
                                                            <tr key={category.id}>
                                                                <td>{category.name}</td>
                                                                <td>{category.status == 1 ? 'Active' : 'Disabled'}</td>
                                                                <td><Link to={`/admin/categories/edit/${category.id}`} className='btn btn-success'>Edit </Link>

                                                                    <button className='btn btn-danger' onClick={() => deleteCategory(category.id)}>

                                                                        {loading ? 'Delete' : 'Deleting'}

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