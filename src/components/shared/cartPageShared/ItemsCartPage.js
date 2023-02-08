import React from 'react';

//css
import styles from "./ItemsCartPage.module.css";
import "./ItemsCartPage.css"

/// img 
import imgmob from "../../../assets/images/2-1mob.jpg"
/// redux
import { useDispatch,useSelector } from 'react-redux';
//actions
import { increase,decrease,removeItem } from '../../../redux/cart/cartProductAction';

const ItemsCartPage = (props) => {
    // console.log(props)
    const { image, id, title, price, quantitiy, color } = props.data;
    const dispatch =useDispatch()
    const state = useSelector(state=>state.cartProductState)

    return (

        <div className='row itemCart'>
            <div className='col-7 rightItemCart'>
                <img src={image.image1} alt="mobile" />
                <div>
                    <h5>{title}</h5>
                    <p><span> رنگ :</span>{color}</p>
                </div>

            </div>
            <div className='col centerItemCart'>
                <h6>{price}<span> تومان </span></h6>
            </div>
            <div className=' col leftItemCart '>
               <div className='btnsLeftItemCart'>
                    {
                        quantitiy > 1 ?
                            <button onClick={() => dispatch(decrease(props.data))}> <i class="fa fa-minus" aria-hidden="true"></i> </button>
                            :
                            <button onClick={() => dispatch(removeItem(props.data))}><i class="fa fa-trash" aria-hidden="true"></i></button>
                    }
                <div className=' '>
                    <span>{quantitiy}</span>
                </div>
                    {
                        <button onClick={() => dispatch(increase(props.data))}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    }
               </div>
                
            </div>
        </div>
    );
};

export default ItemsCartPage;