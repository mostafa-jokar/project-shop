import React from 'react';
import styles from "./ProductCart.module.css";
import { Link } from 'react-router-dom';

// functions 
import { shorter, isInCart, quantitiyItem } from '../../helper/someFunc';

// redux
import { useDispatch, useSelector } from 'react-redux';
//actions
import { removeItem, increase, decrease, addItem } from '../../redux/cart/cartProductAction';

// icons
import garbageIcon from "../../assets/icons/garbage-icon.svg";
// image 



const ProductCart = ({ productData }) => {
    // console.log(productData)

    const state = useSelector(state => state.cartProductState)
    const dispatch = useDispatch()

    return (

        <div className={styles.cart}>
            <Link className={styles.goToDetails} to={`/products/${productData.id}`} >
                <div className={styles.contentImg}>
                    <img src={productData.image.image1} alt="image" className={styles.imageCart} />
                </div>
                <h6>{productData.title}</h6>

                <p>{productData.description}</p>

                <div className={styles.pervPrice}>
                    <label>{productData.discount}</label>
                    <span>{productData.prevPrice}</span>
                </div>
                <div className={styles.Price}>
                    <span>{productData.price}</span>
                    <label>تومان</label>
                </div>
            </Link>


            <div className={styles.addToCard}>

                {
                    isInCart(state, productData.id) ?
                        <button onClick={() => dispatch(increase(productData))} className={styles.btnCartIn}><i class="fa fa-plus" aria-hidden="true"></i></button>
                        :
                        <button onClick={() => dispatch(addItem(productData))} className={styles.btnaddCart}>  افزودن به سبد خرید</button>

                }
                {
                    quantitiyItem(state, productData.id) > 0 &&
                    <span>{quantitiyItem(state, productData.id)}</span>
                }
                {
                    quantitiyItem(state, productData.id) > 1 &&
                    <button onClick={() => dispatch(decrease(productData))} className={styles.btnCartDi}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                }
                {
                    quantitiyItem(state, productData.id) === 1 &&
                    <button onClick={() => dispatch(removeItem(productData))} className={styles.btnGarbage}> <i class="fa fa-trash-o"></i> </button>
                }


            </div>


        </div>


    );
};

export default ProductCart;