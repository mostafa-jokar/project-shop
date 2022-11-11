import React from 'react';
import "./abouteSeller.css"

const AbouteSeller = () => {
    return (
        <div className='contentAbouteSeller'>
            <p>  فروشنده  : <a href="#">موبایل استور</a></p>
            <div>
                <p> <i class='fa-solid fa-check'></i>  ۱۰ روز ضمانت بازگشت  </p>
                <p> <i class='fa-solid fa-check'></i>  پشتیبانی تا ۱۲ شب   </p>
                <p> <i class='fa-solid fa-check'></i>   تضمین اصالت کالا </p>
                <p> <i class='fa-solid fa-check'></i>   امکان خرید اقساطی </p>
            </div>
        </div>
    );
};

export default AbouteSeller;