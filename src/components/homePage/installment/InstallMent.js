import React from 'react';

//css 
import "./installMent.css"
// images
import mobile from "../../../assets/images/installment-Images/01.jpg"
import dressmachin from "../../../assets/images/installment-Images/dressmachin.jpg"
import ferizer from "../../../assets/images/installment-Images/ferizer.jpg"
import gold from "../../../assets/images/installment-Images/gold.jpg"
import hard from "../../../assets/images/installment-Images/hard.jpg"
import laptop from "../../../assets/images/installment-Images/laptop.jpg"
import mchinwash from "../../../assets/images/installment-Images/mchinwash.jpg"
import ps5 from "../../../assets/images/installment-Images/ps5.jpg"
import spilet from "../../../assets/images/installment-Images/spilet.jpg"
import tv from "../../../assets/images/installment-Images/tv.jpg"

const InstallMent = () => {
    return (
        <div className='container mt-3 contentImgInstallMent'>
            <div>
                <img className='mb-2' src={tv} alt="#" />
                <span>تلویزیون</span>
            </div>
            <div>
                <img className='mb-2' src={mobile} alt="#" />
                <span>موبایل</span>
            </div>
            <div>
                <img className='mb-2' src={dressmachin} alt="#" />
                <span>ماشین لباسشویی</span>
            </div>
            <div>
                <img className='mb-2' src={ferizer} alt="#" />
                <span>یخچال</span>
            </div>
            <div>
                <img className='mb-2' src={gold} alt="#" />
                <span>طلا</span>
            </div>
            <div className='divInstallment_right'>
                <span>اقساطی</span>
                <label><i class="fa fa-arrow-right"></i></label>
            </div>
            <div className='divInstallment_left'>
                <span>بخر!</span>
                <label><i class="fa fa-arrow-left"></i></label>
            </div>
            <div>
                <img className='mb-2' src={hard} alt="#" />
                <span>هارد</span>
            </div>
            <div>
                <img className='mb-2' src={laptop} alt="#" />
                <span>لپ تاپ</span>
            </div>
            <div>
                <img className='mb-2' src={mchinwash} alt="#" />
                <span>ماشین ظرفشویی</span>
            </div>
            <div>
                <img className='mb-2' src={ps5} alt="#" />
                <span>کنسول</span>
            </div>
            <div>
                <img className='mb-2' src={spilet} alt="#" />
                <span>اسپیلت</span>
            </div>
        </div>
    );
};

export default InstallMent;