import React, { useEffect, useState, useRef, useMemo } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { useForm } from 'react-hook-form'
import axios from '../../../api/axios';
import { toast } from 'react-toastify';

import Editor from 'react-simple-wysiwyg';
import { useParams } from 'react-router-dom';
import { VITE_IMAGE_URL } from "../../../config/config";


const Edit = () => {

    function onChange(e) {
        setHtml(e.target.value);
    }

    const params = useParams();

    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({
        criteriaMode: "all",
        defaultValues: {
            sizes: [], // make sure default is an array
        },
    });

    const [html, setHtml] = useState();



    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);
    const [product, setProduct] = useState(null);
    const [allSizes, setAllSizes] = useState(null);
    const updateProduct = (data) => {

        const payload = { ...data, description: html };
        const formData = objectToFormData(payload);

        setLoading(true);
        formData.append('_method', 'PUT');
        axios.post('/products/' + params.id, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response) => {
                toast.success("Product Updated Successfully");
                getProduct();
                // Optionally, redirect or show a success message
            })
            .catch((error) => {
                if (error.response?.status === 422) {
                    const formErrors = error.response.data.errors;
                    Object.keys(formErrors).forEach(key => {
                        setError(key, { message: formErrors[key][0] });
                    })
                }
                toast.error("Error update Product");
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

    const getSizes = () => {
        axios.get('/sizes')
            .then((response) => {
                setAllSizes(response.data)
            })
    }


    const getProduct = () => {
        axios.get('/products/' + params.id)
            .then((response) => {
                const selectedSizes = response.data.sizes ? response.data.sizes.map(s => s.id.toString()) : [];
                reset({
                    title: response.data.title,
                    category_id: response.data.category_id,
                    price: response.data.price,
                    quantity: response.data.quantity,
                    compare_price: response.data.compare_price,
                    sku: response.data.sku,
                    sizes: selectedSizes, // <-- important

                });
                setHtml(response.data.description);
                setProduct(response.data);
            })
    }

    const objectToFormData = (data) => {
        const formData = new FormData();
        for (const key in data) {
            if (data[key] instanceof FileList) {
                Array.from(data[key]).forEach(file => {
                    formData.append(`${key}[]`, file);
                });
            } else if (Array.isArray(data[key])) {
                // Append each value in the array
                data[key].forEach(item => {
                    formData.append(`${key}[]`, item);
                });
            } else {
                formData.append(key, data[key]);
            }
        }
        return formData;
    };


    useEffect(() => {
        getCategories();
        getSizes();
        getProduct()
    }, [])
    return (

        <AdminLayout>
            <div className="row mt-4">
                <div className='col-md-8'>
                    <form action={handleSubmit(updateProduct)} className='card p-4'>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Product Title</label>
                            <input

                                {...register('title')}

                                type="text" className="form-control" id="categoryName" placeholder="Enter product title" />


                            {errors.title && <span className="text-danger">{errors.title.message}</span>}

                        </div> <br />
                        <div className="mb-3">

                            <select {
                                ...register('category_id')
                            } className='form-control'>
                                <option value="">Select Category</option>
                                {categories && categories.map((category) =>
                                    <option key={`category#${category.id}`} value={category.id}>{category.name}</option>
                                )
                                }
                            </select>
                            {errors.category_id && <span className="text-danger">{errors.category_id.message}</span>}

                        </div><br />
                        <div className="mb-3">
                            <Editor
                                containerProps={{ style: { height: '250px' } }} value={html} placeholder='Enter product description' onChange={onChange} />

                        </div>
                        <br />
                        <div className='mb-3'>
                            <input type="number" className='form-control' placeholder='Enter product price'
                                {...register('price')}
                            />
                            {errors.price && <span className="text-danger">{errors.price.message}</span>}
                        </div>

                        <br />
                        <div className='mb-3'>
                            <label>Size</label>
                            {
                                allSizes && allSizes.map((size) => {
                                    return (
                                        <div key={`size#${size.id}`}>
                                            <input {...register('sizes')} value={size.id} type="checkbox" placeholder='' />
                                            &nbsp; {size.name}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input {...register('compare_price')} type="number" className='form-control' placeholder='Enter discounted product price' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input {...register('sku')} type="text" className='form-control' placeholder='Enter product sku' />
                        </div>
                        <br />
                        <div className='mb-3'>
                            <input {...register('quantity')} type="number" className='form-control' placeholder='Enter quantity' />
                        </div>
                        <br />

                        {
                            product && product.images.map((image, idx) => (
                                <img key={idx} src={`${VITE_IMAGE_URL}/${image.image}`} alt="Product" />
                            ))
                        }

                        <br />
                        <div className='mb-3'>
                            <input {...register('images')} type="file" multiple className='form-control' placeholder='Upload Image' />
                        </div>


                        <br />
                        <div style={{ color: "red" }}>
                            {Object.values(errors).map((error, idx) => (
                                <p className="text-danger" key={idx}>{error.message}</p>
                            ))}
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