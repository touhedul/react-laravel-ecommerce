import React from 'react'
import { VITE_IMAGE_URL } from '../../config/config'

const Product = ({ product }) => {
    return (

        <div className="col-md-4">
            <div className="product-item">
                <div className="product-thumb">
                    <img className="img-responsive" src={`${VITE_IMAGE_URL}/${product?.images[0]?.image}`} alt="" />


                    <div className="preview-meta">
                        <ul>
                            <li>
                                <span data-toggle="modal" data-target="#product-modal">
                                    <i className="tf-ion-ios-search-strong"></i>
                                </span>
                            </li>
                            <li>
                                <a href="#!" ><i className="tf-ion-ios-heart"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-content">
                    <h4><a href="product-single.html">{product.title}</a></h4>
                    <p className="price">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product