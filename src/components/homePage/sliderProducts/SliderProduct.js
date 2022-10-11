import React from 'react';

// hooks
import { useEffect } from 'react';
// redux
import ProductCart from '../../shared/ProductCart';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../../redux/products/productsAction';



import { Link } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sliderProduct.css"


import { Navigation, Pagination } from "swiper";

const SliderProduct = (props) => {
    // console.log(props)
    // redux code
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (productsState.products.length) {
        } else {
            dispatch(fetchProducts())
        }
    }, []);



    return (

       

            <div className="containerSlider mb-3 mt-3">
                <div className="headerSlider">
                    <span>{`${props.title}`}</span>
                    <Link to={`/productss/${props.category}`} >مشاهده بیشتر</Link>
                </div>
                <Swiper
                    dir="rtl"
                    slidesPerView={props.slide}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    style={{
                        "--swiper-navigation-size": "35px",
                    }}
                    className="mySwiper" 
                    breakpoints={{
                        1199.8: {
                            slidesPerView: 5
                        },
                        991.8: {
                            slidesPerView: 4
                        },
                        767.8: {
                            slidesPerView: 3
                        },
                        750.8: {
                            slidesPerView: 2
                        },
                        450.7: {
                           
                        },
                        299: {
                            slidesPerView: 1,
                           
                        },
                       
                      }}
                >

                    {
                        productsState.loading ? <h2>loading</h2> :
                            productsState.error ?
                                <p>{productsState.error}</p> :
                                productsState.products.map(product => (product.category === `${props.category}` && product.goToslider === true) &&
                                    <SwiperSlide><ProductCart key={product.id} productData={product} /></SwiperSlide>)
                    }


                </Swiper>
            </div>
        
    );
};

export default SliderProduct;