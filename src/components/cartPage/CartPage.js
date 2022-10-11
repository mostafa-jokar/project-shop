import React from 'react';
import ItemsCartPage from '../shared/cartPageShared/ItemsCartPage';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// css
import styles from "./CartPage.module.css";
import "./Cartpage.css"
// redux
import { useDispatch, useSelector } from 'react-redux';
//actions
import { clear, ChekOute } from '../../redux/cart/cartProductAction';





const CartPage = () => {


    const dispatch = useDispatch()
    const state = useSelector(state => state.cartProductState)

    // console.log(state)


    return (

        <>
            {
                state.totalCount > 0 ?

                    <div className={styles.wallcolorPage}>
                        <div className="container  ">
                            <div className='row cartpageContents'>
                                <div className="cartpageContentsRight col-12 col-xl-8 col-lg-8 mb-5">
                                    <div className={styles.itemsCartPage}>
                                        {state.selectedItems.map(item => <ItemsCartPage key={item.id} data={item} />)}
                                    </div>
                                    <button onClick={() => dispatch(clear())}>پاک کردن لیست خرید</button>

                                </div>
                                <div className="cartpageContentsLeft col-12 col-xl col-lg ">
                                    <div className="calculate">
                                        <div className='prevePriceCartPage'>
                                            <span> مجموع قیمت کالا ها <label>({state.totalCount})</label></span>
                                            <p> {state.prevPrice} <span>تومان</span></p>
                                        </div>
                                        <div className='profitPriceCartPage'>
                                            <span>سود شما </span>

                                            <p> {state.totalProfit} <span>تومان</span></p>
                                        </div>
                                        <div className='sendPriceCartPage'>
                                            ارسال رایگان
                                        </div>
                                        <div className='finalPriceCartPage'>
                                            <span>مبلغ قابل پرداخت</span>
                                            <p>{state.totalPrice} <span>تومان</span></p>
                                        </div>
                                        <div className='BtnContinueToBuyCartPage'>
                                            <button onClick={() => dispatch(ChekOute())}>ادامه فرایند خرید</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    :

                    state.checkoute ?

                        <div className='emptyCart_checkOute'>
                            <div>
                                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                <h4 className='mb-4'>خرید شما با موفقیت انجام شد!</h4>
                                <button>
                                    <Link to="/homePage">
                                        <i class="fa fa-link" aria-hidden="true"></i>  بازگشت به صفحه اصلی
                                    </Link>
                                </button>
                            </div>
                        </div>
                        :
                        <div className='emptyCart_clear'>
                            <div>
                                <i class="fa fa-shopping-bag" aria-hidden="true"></i>      
                                <h4 className='mb-4'>سبد محصول شما خالی است !</h4>
                                <button>
                                    <Link to="/homePage">
                                        <i class="fa fa-link" aria-hidden="true"></i>  بازگشت به صفحه اصلی
                                    </Link>
                                </button>
                            </div>
                        </div>



            }

        </>

    );
};

export default CartPage;