import React, { useState } from 'react';
import "./AllProducts";
import axios from 'axios';








const CheckFormList = (prpos) => {

    const [brands, setBrands] = useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:3000/brands").then((response) => {
            setBrands(response.data);
        });
    }, []);

    // console.log(brands)
    return (
        <div>
            {

                brands.map(brand => <div className='checkFormListName'>
                    <div>
                        <input type="checkbox" value="" />
                        <label classNAme="" for="flexCheckDefault">
                            {brand.brandPer}
                        </label>
                    </div>
                    <label classNAme="formchecklabel" for="flexCheckDefault">
                        {brand.brandEn}

                    </label>
                </div>)

            }

           
        </div>



    );
};

export default CheckFormList;