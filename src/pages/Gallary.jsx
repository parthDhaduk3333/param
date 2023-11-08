import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const Gallary = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <>
            <div class="position-relative mainBanner gallary" id="home">
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
                    <h3 class="text-center display-3 fw-bold ">Gallary</h3>
                </div>
            </div>
            <section className='m-100'>
            <Title name="Highlights" />
                <ReactImageGallery items={images}></ReactImageGallery>
            </section>
        </>
    )
}

export default Gallary