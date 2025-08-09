import React, { useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { useForm } from 'react-hook-form'
import axios from '../../../api/axios';
import { toast } from 'react-toastify';

const Create = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        criteriaMode: "all", // <-- this is required to get all error messages

    });

    const [loading, setLoading] = useState(false);
    const createProduct = (data) => {

        setLoading(true);
        axios.post('/products', data)
            .then((response) => {
                toast.success("Product Created Successfully");
                // Optionally, redirect or show a success message
            })
            .catch((error) => {
                if (error.response?.status === 422) {
                    toast.error(error.response?.data?.message);
                }
                toast.error("Error creating Product");
                // Optionally, show an error message
            })
            .finally(() => {
                setLoading(false);
            })

    }
    return (

        <AdminLayout>
            <div className="row mt-4">
                <div className='col-md-8'>
                    <form action={handleSubmit(createProduct)} className='card p-4'>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Product Title</label>
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
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">Creating...</span>
                            ) : 'Create'}

                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout >
    )
}

export default Create