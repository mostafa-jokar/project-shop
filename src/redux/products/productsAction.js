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
        // axios.get("https://api-project-shop.herokuapp.com/products")
        // axios.get("https://raw.githubusercontent.com/mostafa-jokar/api/main/db.json/products")
        // axios.get("http://localhost:3000/products")
   

        axios.get("https://api.npoint.io/54ec5dfc969eefe55b28/products")
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