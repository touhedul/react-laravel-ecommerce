import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Rating } from 'react-simple-star-rating'
import axiosInstance from '../api/axios'
import { useParams } from 'react-router-dom'
import { VITE_IMAGE_URL } from '../config/config'
import { toast } from 'react-toastify'


export const Product = () => {
    const [rating, setRating] = useState(0)

    const [product, setProduct] = useState({})
    const params = useParams();

    const fetchProduct = (id) => {
        axiosInstance.get(`/products/${params.id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the product!", error);
            });
    }

    const addToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = existingCart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        toast.success('Product added to cart');
    }

    useEffect(() => {
        fetchProduct(params.id);
    }, [])
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    return (
        <>
            <Layout>

                <section className="single-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li className="active">Single Product</li>
                                </ol>
                            </div>
                            <div className="col-md-6">
                                <ol className="product-pagination text-right">
                                    <li><a href="blog-left-sidebar.html"><i className="tf-ion-ios-arrow-left"></i> Next </a></li>
                                    <li><a href="blog-left-sidebar.html">Preview <i className="tf-ion-ios-arrow-right"></i></a></li>
                                </ol>
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-md-5">
                                <div className="single-product-slider">
                                    <div id='carousel-custom' className='carousel slide' data-ride='carousel'>
                                        <div className='carousel-outer'>

                                            <div className='carousel-inner '>

                                                {product.images && product.images.map((image, index) => {
                                                    return (
                                                        <div class={index === 0 ? 'item active' : 'item'} key={index}>
                                                            <img src={`${VITE_IMAGE_URL}/${image.image}`} alt='' data-zoom-image={`${VITE_IMAGE_URL}/${image.image}`} />
                                                        </div>
                                                    )
                                                })}

                                            </div>


                                            <a className='left carousel-control' href='#carousel-custom' data-slide='prev'>
                                                <i className="tf-ion-ios-arrow-left"></i>
                                            </a>
                                            <a className='right carousel-control' href='#carousel-custom' data-slide='next'>
                                                <i className="tf-ion-ios-arrow-right"></i>
                                            </a>
                                        </div>


                                        <ol className='carousel-indicators mCustomScrollbar meartlab'>

                                            {product.images && product.images.map((image) => {
                                                return (
                                                    <li data-target='#carousel-custom' data-slide-to='0' className='active'>
                                                        <img src={`${VITE_IMAGE_URL}/${image.image}`} alt='' />
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="single-product-details">
                                    <h2>{product.title}</h2>
                                    <Rating
                                        size={20}
                                        onClick={handleRating}
                                    />
                                    <p className="product-price">${product.price}</p>

                                    <p className="product-description mt-20">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: product.description }}
                                        />
                                    </p>
                                    <div className="product-size">
                                        <span>Size:</span>
                                        <select className="form-control">
                                            {product.sizes && product.sizes.map((size) => (
                                                <option key={size.id} value={size.id}>{size.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button onClick={addToCart} className="btn btn-main mt-20">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="tabCommon mt-20">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
                                        <li className=""><a data-toggle="tab" href="#reviews" aria-expanded="false">Reviews (3)</a></li>
                                    </ul>
                                    <div className="tab-content patternbg">
                                        <div id="details" className="tab-pane fade active in">
                                            <h4>Product Description</h4>
                                            <p><div
                                                dangerouslySetInnerHTML={{ __html: product.description }}
                                            /></p>
                                        </div>
                                        <div id="reviews" className="tab-pane fade">
                                            <div className="post-comments">
                                                <ul className="media-list comments-list m-bot-50 clearlist">

                                                    <li className="media">

                                                        <a className="pull-left" href="#!">
                                                            <img className="media-object comment-avatar" src="public/assets/images/blog/avater-1.jpg" alt="" width="50" height="50" />
                                                        </a>

                                                        <div className="media-body">
                                                            <div className="comment-info">
                                                                <h4 className="comment-author">
                                                                    <a href="#!">Jonathon Andrew</a>

                                                                </h4>
                                                                <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                                <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                            </div>

                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum minima, reprehenderit laboriosam officiis praesentium? Impedit minus provident assumenda quae.
                                                            </p>
                                                        </div>

                                                    </li>



                                                    <li className="media">

                                                        <a className="pull-left" href="#!">
                                                            <img className="media-object comment-avatar" src="public/assets/images/blog/avater-4.jpg" alt="" width="50" height="50" />
                                                        </a>

                                                        <div className="media-body">

                                                            <div className="comment-info">
                                                                <div className="comment-author">
                                                                    <a href="#!">Jonathon Andrew</a>
                                                                </div>
                                                                <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                                <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                            </div>

                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni natus, nostrum iste non delectus atque ab a accusantium optio, dolor!
                                                            </p>

                                                        </div>

                                                    </li>



                                                    <li className="media">

                                                        <a className="pull-left" href="#!">
                                                            <img className="media-object comment-avatar" src="public/assets/images/blog/avater-1.jpg" alt="" width="50" height="50" />
                                                        </a>

                                                        <div className="media-body">

                                                            <div className="comment-info">
                                                                <div className="comment-author">
                                                                    <a href="#!">Jonathon Andrew</a>
                                                                </div>
                                                                <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                                <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                            </div>

                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                                                            </p>

                                                        </div>

                                                    </li>
                                                </ul>
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
