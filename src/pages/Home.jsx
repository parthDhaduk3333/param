import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* // <!-- ============== Main Banner and Header ============== --> */}
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
            {/* // <!-- ================ About us ================== --> */}
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
            {/* <!-- ======================== Services ======================= --> */}
            <section class="m-100" id="services">
                <div class="d-flex m-0 flex-wrap">
                    <div class="service-box one">
                        <img src="/images/bedroom.png" alt="bedroom" class="coverImage" />
                    </div>
                    <div class="service-box two">
                        <div class="d-flex h-100 align-items-center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <img src="/images/bed_icon.png" alt="bed" class="img-fluid mb-3 service-icon" />
                                </div>
                                <h4 class="fw-bold text-center">Lorem ipsum dolor sit amet.</h4>
                                <p class=" text-center service-p lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, nulla inventore. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-box three">
                        <img src="/images/rainDance.png" alt="bedroom" class="coverImage" />
                    </div>
                    <div class="service-box four">
                        <div class="d-flex h-100 align-items-center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <img src="/images/fountain_icon.png" alt="bed" class="img-fluid mb-3 service-icon" />
                                </div>
                                <h4 class="fw-bold text-center">Lorem ipsum dolor sit amet.</h4>
                                <p class=" text-center service-p lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, nulla inventore. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-box five">
                        <div class="d-flex h-100 align-items-center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <img src="/images/eat_icon.png" alt="bed" class="img-fluid mb-3 service-icon" />
                                </div>
                                <h4 class="fw-bold text-center">Lorem ipsum dolor sit amet.</h4>
                                <p class=" text-center service-p lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, nulla inventore. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-box six">
                        <img src="/images/restaurant.png" alt="bedroom" class="coverImage" />
                    </div>
                    <div class="service-box seven">
                        <div class="d-flex h-100 align-items-center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <img src="/images/forest_icon.png" alt="bed" class="img-fluid mb-3 service-icon" />
                                </div>
                                <h4 class="fw-bold text-center">Lorem ipsum dolor sit amet.</h4>
                                <p class=" text-center service-p lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, nulla inventore. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-box eight">
                        <img src="/images/mountain.png" alt="bedroom" class="coverImage" />
                    </div>
                </div>
            </section>
            {/* <!-- ==================== Room Services ====================== --> */}
    <section class="m-100">
        {/* <!-- --------- Heading ---------- --> */}
        <div class="container py-4">
            <div class="d-flex justify-content-center align-items-center flex-column ">
                <div class="position-relative">
                    <h2 class="main-title mb-0">Services</h2>
                    <h2 class="subTitle mb-0">Services</h2>
                </div>
                <img src="/images/title.png" alt="title" class="img-fluid" />
            </div>
        </div>
        {/* <!-- ---------------------------- --> */}
        <div class="container">
            <div class="row justify-content-center owl-carousel room-service p-3">
                <div class="col-xl-8 room_service my-4 mx-auto">
                    <div class="row align-items-center">
                        <div class="col-md-5 p-0 h-100 d-flex">
                            
                            <img src="/images/room.png" alt="room" class="room img-fluid" />
                        </div>
                        <div class="col-md-7">
                            <div class="ms-3 p-3">
                                <h3 class="fw-bold room-title">Single Bed Room</h3>
                                <h5 class="room-details">single bed room with velly view</h5>
                                <div class="d-flex my-3">
                                    <div class="m-1">
                                        <img src="/images/tv.png" alt="Tv" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/ac.png" alt="ac" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/wifi.png" alt="wifi" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/bath.png" alt="bath" class="service_icon" />
                                    </div>
                                </div>
                                <p class="text-muted lh-lg m-0 room-p">Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit.
                                    Neque doloribus est officiis officia. Iure alias nostrum aut minima? Temporibus,
                                    nisi esse sint voluptate natus repudiandae Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 room_service my-4 mx-auto">
                    <div class="row align-items-center">
                        <div class="col-md-5 p-0 h-100 d-flex">
                            
                            <img src="/images/room.png" alt="room" class="room img-fluid" />
                        </div>
                        <div class="col-md-7">
                            <div class="ms-3 p-3">
                                <h3 class="fw-bold room-title">Single Bed Room</h3>
                                <h5 class="room-details">single bed room with velly view</h5>
                                <div class="d-flex my-3">
                                    <div class="m-1">
                                        <img src="/images/tv.png" alt="Tv" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/ac.png" alt="ac" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/wifi.png" alt="wifi" class="service_icon" />
                                    </div>
                                    <div class="m-1 ">
                                        <img src="/images/bath.png" alt="bath" class="service_icon" />
                                    </div>
                                </div>
                                <p class="text-muted lh-lg m-0 room-p">Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit.
                                    Neque doloribus est officiis officia. Iure alias nostrum aut minima? Temporibus,
                                    nisi esse sint voluptate natus repudiandae Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            {/* <!-- ================== Paralax effect ===================== --> */}
            <section class="parallax position-relative">
                <img src="/images/brush.png" alt="brush" class="brush-bottom" />
                <img src="/images/brush.png" alt="brush" class="brush-top" />
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                    <h2 class="text-white fw-bold display-5 text-center">Experience something new every moment</h2>
                    <h5 class="text-center text-white parallax-text lh-base">Relax in the lap of luxury with our plush bedding, enjoy the convenience of modern amenities, and take in the breathtaking views from your private balcony.
                    </h5>
                </div>
            </section>
            {/* <!-- ================== Testimonials ================== --> */}
            <section class="m-100">
                <Title name={"Testimonials"} />
                <div class="container">
                    <div class="owl-carousel testimonial">
                        <div class="p-lg-4 p-2">
                            <div class="testimonial-box">
                                <div class="testimonial-images">
                                    <img src="/images/testimonial.jpg" alt="testimonial" class="testimonial-img" />
                                </div>
                                <h4 class="fw-bold">Mr. John Fernandez</h4>
                                <p class="text-center">CEO, Abc Infotech</p>
                                <p class="text-center text-muted lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Molestiae necessitatibus debitis quibusdam neque unde cumque dolorum tempore dolor
                                    consectetur exercitationem quia, illo repellat dolores officiis eos ex sequi perspiciatis
                                    atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, vel!</p>
                            </div>
                        </div>
                        <div class="p-lg-4 p-2">
                            <div class="testimonial-box">
                                <div class="testimonial-images">
                                    <img src="/images/testimonial.jpg" alt="testimonial" class="testimonial-img" />
                                </div>
                                <h4 class="fw-bold">Mr. John Fernandez</h4>
                                <p class="text-center">CEO, Abc Infotech</p>
                                <p class="text-center text-muted lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Molestiae necessitatibus debitis quibusdam neque unde cumque dolorum tempore dolor
                                    consectetur exercitationem quia, illo repellat dolores officiis eos ex sequi perspiciatis
                                    atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, vel!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================== Contact Us ==================== --> */}
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
            {/* <!-- ================= map ===================--> */}
            <section>
                <div class="mapouter">
                    <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                            href="https://formatjson.org/">format json</a></div>

                </div>
            </section>
            {/* <!-- ================= Footer ============== --> */}
            <section class="bg-theme py-3">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center footer-flex">
                        <ul class="footer-nav m-0 p-0">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Gallary</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                        <div class="d-flex align-items-center">
                            <div class="footer-icon mx-2">
                                <img src="/images/facebook.png" alt="facebook" />
                            </div>
                            <div class="footer-icon mx-2">
                                <img src="/images/instagram.png" alt="instagram" />
                            </div>
                            <div class="footer-icon mx-2">
                                <img src="/images/whatsapp.png" alt="whatsapp" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="footer-devider"></div>
                            <p class="copyright">Copyright ©2022 All rights reserved by param resort and Restaurant</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home