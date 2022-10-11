import React from 'react';

// css
import "./homePage.css";

// components
import BannerSlideShow from './bannerSlideShow/BannerSlideShow';
import InstallMent from './installment/InstallMent';
import SliderProduct from './sliderProducts/SliderProduct';


// images
import banner1 from "../../assets/images/banners/aa.jpg"
import banner2 from "../../assets/images/banners/ab.jpg"
import banner3 from "../../assets/images/banners/ba.png"
import banner4 from "../../assets/images/banners/bb.png"
import banner5 from "../../assets/images/banners/ca.png"
import banner6 from "../../assets/images/banners/cb.png"
import banner7 from "../../assets/images/banners/cc.png"
import banner8 from "../../assets/images/banners/cd.png"
import banner9 from "../../assets/images/banners/da.jpg"
import bannerLaptop from "../../assets/images/banners/laptop.png"




const HomePage = () => {


    return (
        <>
            <div className='container'>
                <div className='bannerSlideShow'>
                    <BannerSlideShow />
                    <InstallMent />
                    <div className='banner1 mt-5 mb-5'>
                        <img src={banner1} alt="#" />
                        <img src={banner2} alt="#" />
                    </div>
                    <SliderProduct category={"mobile"} title={"گوشی موبایل"}  slide={5} />
                    <div className='banner1 mt-5 mb-5'>
                        <img src={banner3} alt="#" />
                        <img src={banner4} alt="#" />
                    </div>
                    <SliderProduct category={"laptop"} title={"لپتاپ"}  slide={5} />
                    <div className='banner2 mt-5 mb-5'>
                        <img src={banner5} alt="#" />
                        <img src={banner6} alt="#" />
                        <img src={banner7} alt="#" />
                        <img src={banner8} alt="#" />
                    </div>
                    <SliderProduct category={"mobile"} title={"گوشی موبایل"} slide={5} />
                    <SliderProduct category={"mobile"} title={"گوشی موبایل"} slide={5} />
                   
                    <div className='banner9 mt-4 mb-5'>
                        <img src={banner9} alt="#" />
                    </div>
                    <SliderProduct category={"mobile"} title={"گوشی موبایل"} slide={5} />
                </div>
            </div>
        </>
    );
};

export default HomePage;