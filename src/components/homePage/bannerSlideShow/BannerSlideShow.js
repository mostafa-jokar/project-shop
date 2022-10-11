import React from "react";

import Carousel from 'react-bootstrap/Carousel';


// Import Swiper styles

import "./bannerSlideShow.css";

// images
import image1SlideShow from '../../../assets/images/slideShowBanner/baner1.jpg';
import image2SlideShow from '../../../assets/images/slideShowBanner/baner2.jpg';
import image3SlideShow from '../../../assets/images/slideShowBanner/baner3.jpg';
import image4SlideShow from '../../../assets/images/slideShowBanner/baner4.jpg';


const BannerSlideShow = () => {
    return (
        <Carousel className="mt-3 mb-3 contentImage_carousel">
            <Carousel.Item className="contentImage_carousel" >
                <div className="" >
                    <img
                        className="d-block  image-carousel"
                        src={image1SlideShow}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item className="contentImage_carousel">
                <div className="" >
                    <img
                        className="d-block w-100 image-carousel"
                        src={image2SlideShow}
                        alt="Second slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item className="contentImage_carousel">
                <div className="" >
                    <img
                        className="d-block w-100 image-carousel"
                        src={image3SlideShow}
                        alt="Third slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item className="contentImage_carousel">
                <div className="" >
                    <img
                        className="d-block w-100 image-carousel"
                        src={image4SlideShow}
                        alt="forth slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default BannerSlideShow;