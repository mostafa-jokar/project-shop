const initialState = {
    loading :false ,
    products :[] ,
    error : " " ,
    
}

const productsReducer = (state=initialState , action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS_REQUEST":
             return{
            ...state ,
            loading : true
        }
        case "FETCH_PRODUCTS_SUCCSESS":
             return{
            loading:false,
            products: action.payload
        }
        case "FETCH_PRODUCTS_ERROR":
             return{
            loading:false,
            products: action.payload
        }
        default: return state
    }
}

export default productsReducer;