import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero-slider">
                <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: 'url(/public/assets/images/slider/slider-1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text-center">
                                <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
                                <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br /> is hidden in details.</h1>
                                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="shop.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero