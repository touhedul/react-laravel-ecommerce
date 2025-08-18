
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Product from '../components/home/Product'

import axiosInstance from '../api/axios';

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [categories, setSategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const getProducts = () => {

        console.log('selectedCategory', selectedCategory);
        const params = new URLSearchParams();
        if (selectedCategory.length > 0) {
            selectedCategory.forEach((cat) => params.append("categories[]", cat));
        }
        setLoading(true);
        const url = `/all-products?${params.toString()}`;
        console.log('url', url);
        axiosInstance.get(url)
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
    const getCategories = () => {
        axiosInstance.get('/categories')
            .then((response) => {
                setSategories(response.data);
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
    }

    const handleCategoryChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setSelectedCategory(pre => [...pre, value]);
        } else {
            setSelectedCategory(selectedCategory.filter((id) => id != value));
        }
    }

    useEffect(() => {
        getCategories();
        getProducts();
    }, [selectedCategory])

    return (
        <>
            <Layout>
                <section className="products section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="title text-center">
                                <h2>Trendy Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                {/* Categories Card */}
                                <div className="card mb-3 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">Categories</h5>
                                        {
                                            categories && categories.map((category) => {
                                                return (
                                                    <div className="form-check" key={category.id}>
                                                        <input value={category.id} className="form-check-input" type="checkbox" id={`cat-${category.id}`}
                                                            onClick={handleCategoryChange} />

                                                        &nbsp;{category.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-9'>
                                {
                                    products.length > 0 && products.map((product) => {
                                        return (
                                            <Product key={product.id} product={product} />
                                        );
                                    })
                                }
                            </div>


                            <div className="modal product-modal fade" id="product-modal">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="tf-ion-close"></i>
                                </button>
                                <div className="modal-dialog " role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-6 col-xs-12">
                                                    <div className="modal-image">
                                                        <img className="img-responsive" src="public/assets/images/shop/products/modal-product.jpg" alt="product-img" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-xs-12">
                                                    <div className="product-short-details">
                                                        <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                                                        <p className="product-price">$200</p>
                                                        <p className="product-short-description">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                                                        </p>
                                                        <a href="cart.html" className="btn btn-main">Add To Cart</a>
                                                        <a href="product-single.html" className="btn btn-transparent">View Product Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Shop