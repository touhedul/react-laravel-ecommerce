import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { useForm } from 'react-hook-form'
import axios from '../../../api/axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axios';

const Edit = () => {

    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({
        criteriaMode: "all", // <-- this is required to get all error messages

    });

    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState();
    const params = useParams();

    const navigate = useNavigate();

    const updateCategory = (data) => {

        setLoading(true);
        axios.put('/categories/' + params.id, data)
            .then((response) => {
                toast.success("Category Updated Successfully");
                navigate('/admin/categories');
                // Optionally, redirect or show a success message
            })
            .catch((error) => {
                if (error.response?.status === 422) {
                    toast.error(error.response?.data?.message);
                }
                toast.error("Error updating category");
                // Optionally, show an error message
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const getCategory = () => {
        axiosInstance.get('/categories/' + params.id)
            .then((response) => {
                setCategory(response.data)
                reset(response.data);
            })
    }

    useEffect(() => {
        getCategory();
    }, [])
    return (

        <AdminLayout>
            <div className="row mt-4">
                <div className='col-md-8'>
                    <form action={handleSubmit(updateCategory)} className='card p-4'>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Category Name</label>
                            <input

                                {...register('name', {
                                    required: 'Category name is required',
                                    maxLength: {
                                        value: 255,
                                        message: 'Category name must be at most 2 characters'
                                    }
                                })}

                                type="text" className="form-control" id="categoryName" placeholder="Enter category name" />
                            {errors.name?.types
                                && Object.values(errors.name.types).map((msg, index) => (
                                    <div key={index} className="text-danger">{msg}</div>
                                ))
                            }


                        </div>
                        <button type="submit" className="btn btn-primary mt-20">

                            {loading ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">Updating...</span>
                            ) : 'Update'}

                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout >
    )
}

export default Edit