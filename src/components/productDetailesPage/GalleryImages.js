import React from 'react';




//css
import "./galleryImages.css"
import SwiperGalleryimage from '../Modals/SwiperGalleryimage';

const GalleryImages = ({images}) => {
    
    const imagesProduct = images ;
    // console.log(imagesProduct);
    
    return (
        <div className=' galleryImageContainer'>
            <div className='row-8 mb-3 biggerImage'>
                <img className='col' src={images.image1} alt="" data-bs-toggle="modal" data-bs-target="#galleryImgModal" />
            </div>
            <div className='row-4 smallerImages'>
                <img className='col' src={images.image2} alt="#" data-bs-toggle="modal" data-bs-target="#galleryImgModal"/>
                <img className='col' src={images.image3} alt="#" data-bs-toggle="modal" data-bs-target="#galleryImgModal"/>
                <img className='col' src={images.image4} alt="#" data-bs-toggle="modal" data-bs-target="#galleryImgModal"/>
                <img className='col' src={images.image5} alt="#" data-bs-toggle="modal" data-bs-target="#galleryImgModal"/>
                <div className='col'><span data-bs-toggle="modal" data-bs-target="#galleryImgModal">مشاهده</span></div>
              
            </div>
            <SwiperGalleryimage imagesProduct={imagesProduct} />
        </div>
    );
};

export default GalleryImages;