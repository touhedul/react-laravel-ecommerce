import React, { useEffect, useState, useRef, useMemo } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { useForm } from 'react-hook-form'
import axios from '../../../api/axios';
import { toast } from 'react-toastify';

import Editor from 'react-simple-wysiwyg';

const Create = () => {

    function onChange(e) {
        setHtml(e.target.value);
    }


    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        criteriaMode: "all", // <-- this is required to get all error messages

    });

    const [html, setHtml] = useState();



    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);
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

    const getCategories = () => {
        axios.get('/categories')
            .then((response) => {
                setCategories(response.data)
            })
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (

        <AdminLayout>
            <div className="row mt-4">
                <div className='col-md-8'>
                    <form action={handleSubmit(createProduct)} className='card p-4'>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Product Title</label>
                            <input

                                {...register('title', {
                                    required: 'Product title is required',
                                    maxLength: {
                                        value: 255,
                                        message: 'Product title must be at most 255 characters'
                                    }
                                })}

                                type="text" className="form-control" id="categoryName" placeholder="Enter category name" />
                            {errors.name?.types
                                && Object.values(errors.name.types).map((msg, index) => (
                                    <div key={index} className="text-danger">{msg}</div>
                                ))
                            }


                        </div> <br />
                        <div className="mb-3">

                            <select {
                                ...register('category_id', {
                                    required: 'Category is required'
                                })
                            } className='form-control'>
                                <option value="">Select Category</option>
                                {categories && categories.map((category) =>
                                    <option key={`category#${category.id}`} value={category.id}>{category.name}</option>
                                )
                                }
                            </select>

                        </div><br />
                        <div className="mb-3">
                            <Editor
                                containerProps={{ style: { height: '250px' } }} value={html} placeholder='Enter product description' onChange={onChange} />

                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="number" className='form-control' placeholder='Enter product price' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="number" className='form-control' placeholder='Enter discounted product price' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Enter product sku' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="number" className='form-control' placeholder='Enter quantity' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="file" className='form-control' placeholder='Upload Image' />
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