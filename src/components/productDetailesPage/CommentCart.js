import React from 'react';
import "./commentCart.css"

const CommentCart = ({ item }) => {

    
   


    return (
        <>

           
            <div className='containerComment'>
                <div>
                    <label><span>امتیاز:</span><div><span>{item.rate}</span>از 5</div></label>
                    <h6>{item.titleComment}</h6>
                    <span>{item.userName}</span>
                    <p>{item.txtComment}</p>

                </div>
                <div>
                    {
                        item.offer ? <span className='offerTrue'>خرید این محصول را توصیه میکنم</span> : <span className='offerFalse'>خرید این محصول را توصیه نمیکنم</span>
                    }
                </div>
            </div>
        </>
    );
};

export default CommentCart;