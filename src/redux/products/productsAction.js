import axios from "axios"

const fetchProductsRequest = ()=>{
    return{
        type : "FETCH_PRODUCTS_REQUEST"
    }
}
const fetchProductsSucccess = products =>{
    return{
        type : "FETCH_PRODUCTS_SUCCSESS" ,
        payload : products
    }
}
const fetchProductsError = error =>{
    return{
        type : "FETCH_PRODUCTS_ERROR" ,
        payload : error
    }
}
const fetchProducts = products =>{
    return(dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get("http://localhost:3000/products")
        .then(response => {
            const products = response.data;
            dispatch(fetchProductsSucccess(products))
        })
       .catch(error =>{
           const erorrMsg = error.message
           dispatch(fetchProductsError (erorrMsg))
        })
           
    }
}

export default fetchProducts