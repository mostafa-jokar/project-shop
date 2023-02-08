import React, { useState } from 'react';
import "./AllProducts";
import axios from 'axios';








const CheckFormList = (prpos) => {

    const [brands, setBrands] = useState([]);
    React.useEffect(() => {
        axios.get("https://api.npoint.io/54ec5dfc969eefe55b28/brands").then((response) => {
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