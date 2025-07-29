import React from 'react'

const Navbar = () => {
    return (
        <>
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="contact-number">
                                <i className="tf-ion-ios-telephone"></i>
                                <span>0129- 12323-123123</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">

                            <div className="logo text-center">
                                <a href="index.html">

                                    <svg width="135px" height="29px" viewBox="0 0 155 29" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g id="Page-1" stroke="none" fill="none" fillRule="evenodd" fontSize="40"
                                            fontFamily="AustinBold, Austin" fontWeight="bold">
                                            <g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
                                                <text id="AVIATO">
                                                    <tspan x="108.94" y="325">AVIATO</tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">

                            <ul className="top-menu text-right list-inline">
                                <li className="dropdown cart-nav dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                        className="tf-ion-android-cart"></i>Cart</a>
                                    <div className="dropdown-menu cart-dropdown">

                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="images/shop/cart/cart-1.jpg" alt="image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                                <h5><strong>$1200</strong></h5>
                                            </div>
                                            <a href="#!" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                                <h5><strong>$1200</strong></h5>
                                            </div>
                                            <a href="#!" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="cart-summary">
                                            <span>Total</span>
                                            <span className="total-price">$1799.00</span>
                                        </div>
                                        <ul className="text-center cart-buttons">
                                            <li><a href="cart.html" className="btn btn-small">View Cart</a></li>
                                            <li><a href="checkout.html" className="btn btn-small btn-solid-border">Checkout</a></li>
                                        </ul>
                                    </div>

                                </li>


                                <li className="dropdown search dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                        className="tf-ion-ios-search-strong"></i> Search</a>
                                    <ul className="dropdown-menu search-dropdown">
                                        <li>
                                            <form action="post"><input type="search" className="form-control" placeholder="Search..." /></form>
                                        </li>
                                    </ul>
                                </li>


                                <li className="commonSelect">
                                    <select className="form-control">
                                        <option>EN</option>
                                        <option>DE</option>
                                        <option>FR</option>
                                        <option>ES</option>
                                    </select>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu">
                <nav className="navbar navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <h2 className="menu-title">Main Menu</h2>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>


                        <div id="navbar" className="navbar-collapse collapse text-center">
                            <ul className="nav navbar-nav">


                                <li className="dropdown ">
                                    <a href="index.html">Home</a>
                                </li>



                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Shop <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <div className="dropdown-menu">
                                        <div className="row">


                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="confirmation.html">Confirmation</a></li>

                                                </ul>
                                            </div>


                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Layout</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="product-single.html">Product Details</a></li>
                                                    <li><a href="shop-sidebar.html">Shop With Sidebar</a></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>



                                <li className="dropdown full-width dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Pages <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <div className="dropdown-menu">
                                        <div className="row">


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Introduction</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Dashboard</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="dashboard.html">User Interface</a></li>
                                                    <li><a href="order.html">Orders</a></li>
                                                    <li><a href="address.html">Address</a></li>
                                                    <li><a href="profile-details.html">Profile Details</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Utility</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="login.html">Login Page</a></li>
                                                    <li><a href="signin.html">Signin Page</a></li>
                                                    <li><a href="forget-password.html">Forget Password</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <a href="shop.html">
                                                    <img className="img-responsive" src="public/assets/images/shop/header-img.jpg" alt="menu image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>




                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Blog <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                        <li><a href="blog-grid.html">Blog 2 Columns</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>


                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Elements <span
                                            className="tf-ion-ios-arrow-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="typography.html">Typography</a></li>
                                        <li><a href="buttons.html">Buttons</a></li>
                                        <li><a href="alerts.html">Alerts</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar