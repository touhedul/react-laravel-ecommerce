import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="call-to-action bg-gray section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="title">
                                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br /> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
                            </div>
                            <div className="col-lg-6 col-md-offset-3">
                                <div className="input-group subscription-form">
                                    <input type="text" className="form-control" placeholder="Enter Your Email Address" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-main" type="button">Subscribe Now!</button>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="social-media">
                                <li>
                                    <a href="https://www.facebook.com/themefisher">
                                        <i className="tf-ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/themefisher">
                                        <i className="tf-ion-social-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/themefisher">
                                        <i className="tf-ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/themefisher/">
                                        <i className="tf-ion-social-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer-menu text-uppercase">
                                <li>
                                    <a href="contact.html">CONTACT</a>
                                </li>
                                <li>
                                    <a href="shop.html">SHOP</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                    <a href="contact.html">PRIVACY POLICY</a>
                                </li>
                            </ul>
                            <p className="copyright-text">Copyright &copy;2021, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer