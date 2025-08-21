import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    const [total, setTotal] = useState(0);

    const getCartItems = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
        const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    }

    const removeItem = (item) => {
        const newItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(newItems);
        localStorage.setItem("cart", JSON.stringify(newItems));
    }

    useEffect(() => {
        getCartItems();
    }, [])

    return (
        <>
            <Layout>


                <section class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="content">
                                    <h1 class="page-name">Cart</h1>
                                    <ol class="breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li class="active">cart</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div class="page-wrapper">
                    <div class="cart shopping">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2">
                                    <div class="block">
                                        <div class="product-list">
                                            <form method="post">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th class="">Item Name</th>
                                                            <th class="">Item Price</th>
                                                            <th class="">Item Quantity</th>
                                                            <th class="">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cartItems.length > 0 ? cartItems.map((item) => {
                                                                return (

                                                                    <tr class="">
                                                                        <td class="">
                                                                            <div class="product-info">
                                                                                <a href="#!">{item.title}</a>
                                                                            </div>
                                                                        </td>
                                                                        <td class="">${item.price}</td>
                                                                        <td class="">{item.quantity}</td>
                                                                        <td class="">
                                                                            <a href='#' onClick={() => removeItem(item)} class="product-remove">Remove</a>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }) : (
                                                                <tr>
                                                                    <td></td>
                                                                    <td>Cart is empty</td>
                                                                </tr>
                                                            )

                                                        }
                                                    </tbody>
                                                </table>
                                                <h3 className='text-right'>Total: ${total}</h3>
                                                <a href="checkout.html" class="btn btn-main pull-right">Checkout</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
