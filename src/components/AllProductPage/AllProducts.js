import React, { useState, useEffect } from 'react';

// react router dom
import { useParams } from 'react-router-dom';
// child Components 
import ProductCart from '../cartPage/ProductCart';
import CheckFormList from './CheckFormList';

//css
import "./AllProducts.css";

// modals
import FilterPoductsModal from '../Modals/FilterPoductsModal';

//aboute redux
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../redux/products/productsAction';
////
import GridLoader from 'react-spinners/GridLoader';


const Allproducts = (props) => {

    const params = useParams()
    
    // redux code
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (productsState.products.length) {
        } else {
            dispatch(fetchProducts())
        }
    }, []);



    const [isActive, setIsActive] = useState(false); // product filter
    const handleClick = event => {
        setIsActive(current => !current);
    };





    return (


        <div className='container'>
            <div className='row content_AllProductPage'>
                <div className='btnilterProducts'>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#filterProducts">
                        فیلتر محصولات
                    </button>
                </div>
                <div className='sideFilterAllProductsPage 	col-md-4 col-sm-12  col-lg-3'>
                    <div className='sideFilter-search'>
                        <h6>جستوجوی محصول</h6>
                        <input type="text" placeholder='جستوجوی کالا' />
                    </div>
                    <div className='checkForm'>

                        <div className='checkForm-search'>
                            <h6>جستوجوی برند</h6>
                            <input type="text" placeholder='جستوجوی کالا' />
                        </div>
                        <div className={isActive ? 'checkFormList checkFormList_Active' : 'checkFormList checkFormList_DeActive '}>

                            <CheckFormList />

                        </div>
                        <div className='btnCheckFormList'>
                            <button onClick={handleClick}>
                                مشاهده بیشتر
                            </button>

                        </div>
                    </div>

                </div>

                <div className="carts_allProductsPage  col-md-8 col-sm-12 col-lg-9" >

                    {
                        productsState.loading ? <div className='containerGridLoader'><GridLoader color="#36afd6" /></div>  :
                            productsState.error ?
                                <p>{productsState.error}</p> :


                                // productsState.products.map(product =><div className='product-content mb-1'><ProductCart key={product.id} productData={product} /></div> )
                                productsState.products.map(product => {
                                    return(
                                        (product.category === `${params.category}`) && 
                                         <div className='product-content'>{<ProductCart key={product.id} productData={product} />}</div>    
                                    )
                                })


                    }

                </div>

            </div>

            <FilterPoductsModal />

        </div>




    );
}

export default Allproducts;
