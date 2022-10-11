import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className="container">
            <ul>
                <li><i class="fa fa-check-circle-o " aria-hidden="true"></i>  ۱۰ روز ضمانت بازگشت</li>
                <li><i class="fa fa-check-circle-o " aria-hidden="true"></i> امکان خرید اقساطی</li>
                <li><i class="fa fa-check-circle-o " aria-hidden="true"></i> تضمین اصالت کالا</li>
                <li><i class="fa fa-check-circle-o " aria-hidden="true"></i> پشتیبانی تا ۱۲ شب</li>
            </ul>
            <div className='callUs'>
                <p><span>ﺷﻤﺎره ﺗﻤﺎس:</span>**********</p>
                <p><span>  
آدرس ایمیل:</span> *********</p>

                <p><span>شبکه های اجتماعی:</span><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class='fab fa-telegram'></i></a></p>
            </div>
            <div className='description-footer'>
                <h6>تیمچه، خرید آنلاین همه نوع کالا</h6>
                <p>یمچه، فروشگاهی اینترنتی با مدل بازارگاه یا «MarketPlace» است که با تنوع ده‌ها هزار کالا در دسته‌های متفاوت، خرید آنلاین همه‌چیز را برای همه در سراسر کشور امکان‌پذیر کرده است. لندو، اولین و بزرگ‌ترین استارتاپ ایرانی در حوزه خرید اقساطی،‌ فروشگاه اینترنتی تیمچه را راه‌اندازی کرده است. ضمانت اصل بودن کالا، ضمانت ده‌روزه بازگشت کالا، پشتیبانی در هفت روز هفته و امکان خرید اقساطی کالاها، مزایایی است که تیمچه برای خلق یک تجربه متفاوت از خرید آنلاین فراهم کرده است. در تیمچه سبدهایتان را با هرچیزی که در فکرش بودید، پر می‌کنیم. از موبایل و تلویزیون و دوربین گرفته تا ساز و ابزار و پوشیدنی و خوردنی!</p>
            </div>
              
            </div>
        </div>
    );
};

export default Footer;