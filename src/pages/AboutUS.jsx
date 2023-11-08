import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const AboutUS = () => {
  return (
    <>
    <div class="position-relative mainBanner" id="home">
                <img src="/images/mainBanner.png" alt="mainBanner" class="img-fluid main-image" />
                <img src="/images/brush.png" alt="brush" class="img-fluid brush" />
                <header class="py-2">
                    <div class="container ">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <img src="/images/logo.png" alt="logo" class="img-fluid" />
                            </div>
                            <ul class="header-nav">
                                <li class="close"><h2 class="fw-bold display-4">&times;</h2></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/gallary">Gallary</Link></li>
                                <li>Services</li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                            <div class="me-3 menu">
                                <img src="/images/menu.svg" alt="menu" class="img-fluid" height="30" width="30" />
                            </div>
                        </div>
                    </div>
                </header>
                <div
                    class="text-white container px-0 px-lg-5 d-flex justify-content-center flex-column align-items-center h-75">
                    <h3 class="text-center h1">Welcome to</h3>
                    <h1 class="text-center display-4 fw-bold">Param Resort & Restaurant</h1>
                    <p class="text-center px-2 px-lg-5 lh-lg main-banner-p"> At Param Resort, we offer a luxurious and unforgettable getaway experience like no other. Nestled amidst breathtaking natural beauty, our resort is a haven of tranquility and relaxation.</p>
                    <a class="explore-button" href="https://www.makemytrip.com/hotels/">Book Now</a>
                </div>
            </div>
    <section class="m-100" id="aboutUs">
                <Title name="About Us" />
                <div class="container my-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6 my-3">
                            <div class="d-flex h-100">
                                <img src="/images/aboutUs.png" alt="aboutUs" class="img-fluid m-auto" />
                            </div>
                        </div>
                        <div class="col-lg-6 my-3">
                            <h4 class="about-dark">Who we are ?</h4>
                            <p class="lh-lg about-text">Param Resort & Restaurant is more than just a resort. it's a destination that promises an exceptional stay. Our team is dedicated to providing you with the highest level of hospitality, ensuring that your every desire is met with unmatched service.</p>
                            <h4 class="about-dark">What we provide ?</h4>
                            <p class="lh-lg about-text mb-1">Experience Luxury and Comfort Like Never Before</p>
                            <p class="lh-lg about-text">Surrounded by lush greenery and with stunning views of Mahabaleshwar Hills, our resort seamlessly blends modern comforts with nature's embrace. From the moment you arrive until your departure, we aim to create cherished memories that will last a lifetime.</p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AboutUS