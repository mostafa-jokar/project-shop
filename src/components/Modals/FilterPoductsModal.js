
import "./FilterPoductsModal.css";
import React, { useContext, useState } from 'react';
import CheckFormList from "../AllProductPage/CheckFormList";

const FilterPoductsModal = () => {
    const [isActive, setIsActive] = useState(false); // product filter
    
        const handleClick = event => {
            setIsActive(current => !current);
        };
        
    return (
        <div class="modal fade" id="filterProducts" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> فیلتر محصولات</h5>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <div className='sideFilter-allProductsPage 	col-10'>
                            <div className='sideFilter-search' >
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
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        <button type="button" class="btn btn-primary"> ذخیره تغییرات</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPoductsModal;