import React, { useEffect, useState } from 'react'
import { VITE_IMAGE_URL } from '../../config/config';
import axiosInstance from '../../api/axios';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProducts = () => {
        setLoading(true);
        axiosInstance.get('/all-products')
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
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <section className="product-category section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center">
                                <h2>Product Category</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="category-box">
                                <a href="#!">
                                    <img src="public/assets/images/shop/category/category-1.jpg" alt="" />
                                    <div className="content">
                                        <h3>Clothes Sales</h3>
                                        <p>Shop New Season Clothing</p>
                                    </div>
                                </a>
                            </div>
                            <div className="category-box">
                                <a href="#!">
                                    <img src="public/assets/images/shop/category/category-2.jpg" alt="" />
                                    <div className="content">
                                        <h3>Smart Casuals</h3>
                                        <p>Get Wide Range Selection</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="category-box category-box-2">
                                <a href="#!">
                                    <img src="public/assets/images/shop/category/category-3.jpg" alt="" />
                                    <div className="content">
                                        <h3>Jewellery</h3>
                                        <p>Special Design Comes First</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="title text-center">
                            <h2>Trendy Products</h2>
                        </div>
                    </div>
                    <div className="row">

                        {
                            products && products.map((product) => {
                                return (
                                    <Product key={product.id} product={product} />
                                );
                            })
                        }


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

        </>
    )
}

export default Products