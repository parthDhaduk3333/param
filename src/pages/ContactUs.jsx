import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const ContactUs = () => {
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
            <section class="m-100" id="contactUs">
                <Title name="Contact Us"></Title>
                <div class="container contact-us" >
                    <div class="row align-items-center">
                        <div class="col-lg-6 my-3">
                            <div class="d-flex my-3 my-lg-5">
                                <div>
                                    <img src="/images/phone.png" alt="phone" />
                                </div>
                                <div class="ms-2">
                                    <h4 class="ms-3 fw-bold theme">Contact No.</h4>
                                    <h3 class="fw-bold contact-detail">+91 123 456 7890</h3>
                                </div>
                            </div>
                            <div class="d-flex my-3 my-lg-5">
                                <div>
                                    <img src="/images/email.png" alt="email" />
                                </div>
                                <div class="ms-2">
                                    <h4 class="ms-3 fw-bold theme">Email</h4>
                                    <h3 class="fw-bold contact-detail">contact@paramresort.com</h3>
                                </div>
                            </div>
                            <div class="d-flex my-3 my-lg-5">
                                <div>
                                    <img src="/images/location.png" alt="location" />
                                </div>
                                <div class="ms-2">
                                    <h4 class="ms-3 fw-bold theme">Location</h4>
                                    <h3 class="fw-bold contact-detail">Lorem Ipsum is simply dummy text
                                        of the printing, Mahabaleshwar - 123456 </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 my-3">
                            <div class="d-flex">
                                <div class="m-auto">
                                    <img src="/images/Contact_us.png" alt="CONTACT_US" class="img-fluid p-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ContactUs