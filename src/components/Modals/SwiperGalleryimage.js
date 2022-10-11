import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiperGalleryimage.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SwiperGalleryimage({imagesProduct}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (


        <div>
             {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#galleryImgModal">
                dfdsfdsfdsfdfsd
            </button> */}


            <div class="modal fade" id="galleryImgModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                           
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={imagesProduct.image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagesProduct.image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagesProduct.image3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagesProduct.image4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagesProduct.image5} />
                </SwiperSlide>
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src={imagesProduct.image1} />
                </SwiperSlide>
                <SwiperSlide>
                <img src={imagesProduct.image2} />
                </SwiperSlide>
                <SwiperSlide>
                <img src={imagesProduct.image3} />
                </SwiperSlide>
                <SwiperSlide>
                <img src={imagesProduct.image4} />
                </SwiperSlide>
                <SwiperSlide>
                <img src={imagesProduct.image5} />
                </SwiperSlide>
            
            </Swiper>
                        </div>
                       
                    </div>
                </div>
            </div>
         
        </div>
    );
}
