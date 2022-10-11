import React from 'react';
import { Link , useParams} from 'react-router-dom';
import { useEffect , useState } from 'react';

//components
import GalleryImages from './GalleryImages';
import AbouteSeller from './AbouteSeller';
import CommentCart from './CommentCart';

// functions
import { isInCart } from '../../helper/someFunc';
import fetchProducts from '../../redux/products/productsAction';

// redux
import { useDispatch, useSelector } from 'react-redux';

// actions
import { addItem } from '../../redux/cart/cartProductAction';

// css
import "./productsDetailes.css";




const ProductsDetailes = (props) => {
  
    const params = useParams()
    const id = params.id;
    // redux ProductData :
    
    const dispatch = useDispatch()
    useEffect(() => {
        if (productsState.products.length) {
        } else {
            dispatch(fetchProducts())
        }
    }, []);
    const productsState = useSelector(state => state.productsState)
    const targetProduct = productsState.products.find(item => Number(item.id) === Number(id))  ;
    const { title, price, category, brandPer, prevPrice, discount, rate, color, productFeature, comments, aboutRate , image} = targetProduct;
    
    // redux for add to cart :
    const state = useSelector(state => state.cartProductState)
    
    //  about rate
    const {countFiveRate, countFourRate,countThreeRate,countTwoRate,countOneRate,}= aboutRate;
    const sumFullRates = (Number(countFiveRate)*5)+(Number(countFourRate)*4)+(Number(countThreeRate)*3)+(Number(countTwoRate)*2)+(Number(countOneRate)*1)
    const  conuntRates= (Number(countFiveRate))+(Number(countFourRate))+(Number(countThreeRate))+(Number(countTwoRate))+(Number(countOneRate))
    const finalRate= (sumFullRates/conuntRates).toFixed(1);
    const fiveSatr = ((Number(countFiveRate*5)/sumFullRates)*100).toFixed()
    const fourSatr = ((Number(countFourRate*4)/sumFullRates)*100).toFixed()
    const threeSatr = ((Number(countThreeRate*3)/sumFullRates)*100).toFixed()
    const twoSatr = ((Number(countTwoRate*2)/sumFullRates)*100).toFixed()
    const OneSatr = ((Number(countOneRate*1)/sumFullRates)*100).toFixed()
    console.log(sumFullRates);

    return (

        <div className='container' >
            {/* detailes : */}
            <div className='row mt-4'>
                <div className='galleryProductImg col-lg-5 col-xl-4'>
                    <GalleryImages images={image} />
                </div>
                <div className='someDetailes col-lg col-xl-5'>

                    <div className='headerSomeDetailes'>
                        <h6>{title}</h6>
                        <div>
                            <p>برند:<Link to="#">{brandPer}</Link></p>
                            <p>دسته بندی:<Link to="#">{category}</Link></p>
                        </div>
                        <p> امتیاز:<span>{rate} <i class="fa fa-star-half-o" aria-hidden="true"></i> </span></p>
                    </div>
                    <div className='colorProduct'>
                        <p> رنگ:<span>{color} </span></p>
                       
                    </div>
                    <div className='priseDetailes'>
                        <h3>{price}<label>تومان</label></h3>
                        <div>
                            <span>{prevPrice}</span>
                            <label>{discount}</label>
                        </div>
                    </div>
                    <div className='fechearDetiales'>
                        <h6>ویژگی محصول:</h6>
                        <p> رم : <span>{productFeature.ram}</span></p>
                        <p> پردازنده  : <span>{productFeature.cpu}</span></p>
                        <p> تعداد سیم کارت : <span>{productFeature.SimCard}</span></p>
                        <p> حافظه داخلی  : <span>{productFeature.memory}</span></p>
                        <p> تعداد سیم کارت : <span>{productFeature.SimCard}</span></p>
                        <p> حافظه داخلی  : <span>{productFeature.memory}</span></p>
                        <p> تعداد سیم کارت : <span>{productFeature.SimCard}</span></p>
                        <p> حافظه داخلی  : <span>{productFeature.memory}</span></p>
                        <p> تعداد سیم کارت : <span>{productFeature.SimCard}</span></p>
                        <p> حافظه داخلی  : <span>{productFeature.memory}</span></p>
                    </div>
                    {
                        isInCart(state, targetProduct.id) ?
                            <Link to="/cartPage">
                                <button > مشاهده این محصول در سبد خرید</button>
                            </Link>
                            :
                            <Link to="/cartPage">
                                <button onClick={() => dispatch(addItem(targetProduct))} >  افزودن به سبد خرید</button>
                            </Link>

                    }



                </div>
                <div className='abouteSeller col-lg-12  col-xl'>
                    <AbouteSeller />
                </div>
            </div>
            {/* navigationTab :*/}
            <div className='navigationTab'>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#reviewProductTab" type="button" role="tab" aria-controls="reviewProductTab" aria-selected="true">بررسی محصول</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#commentTab" type="button" role="tab" aria-controls="commentTab" aria-selected="false">نظرات کاربران</button>
                    </li>

                </ul>
                <div class="tab-content " id="myTabContent">
                    <div class="tab-pane fade show active" id="reviewProductTab" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div class="tab-pane fade" id="commentTab" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div className='row containerRate'>
                            <div className='col-lg-12 mb-5 col-xl-6'>
                                <h4 className='mb-4'>چطور می‌توانم در مورد این کالا نظر بدهم؟</h4>
                                <p>اگر این محصول را از تیمچه خریداری کرده‌اید و یا تجربه استفاده از آن را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.</p>
                                <Link to={`/products/${params.id}/sendComment`} >
                                <button>افزودن نظر جدید</button>
                                </Link>
                            </div>
                            <div className='topLeftTabComment col-lg-12 col-xl-5 '>
                                <div>
                                    <p><span>{finalRate}</span><ul>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    </ul></p>
                                    <div className='chartRate'>
                                        <div><label>5 ستاره</label><div><div className='colorfive' style={{width:`${fiveSatr}%`}}></div></div><span>{fiveSatr}%</span></div>
                                        <div><label>4 ستاره</label><div><div className='colorfour' style={{width:`${fourSatr}%`}}></div></div><span>{fourSatr}%</span></div>
                                        <div><label>3 ستاره</label><div><div className='colorthree' style={{width:`${threeSatr}%`}}></div></div><span>{threeSatr}%</span></div>
                                        <div><label>2 ستاره</label><div><div className='colortwo' style={{width:`${twoSatr}%`}}></div></div><span>{twoSatr}%</span></div>
                                        <div><label>1 ستاره</label><div><div className='colorone' style={{width:`${OneSatr}%`}}></div></div><span>{OneSatr}%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className='mb-5' >نظرات کاربران</h5>
                        {
                            comments.map(item => {
                                return (
                                    <CommentCart item={item} />
                                )
                            }
                            )
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsDetailes;