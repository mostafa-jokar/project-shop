//  import {combioneReducors} from "redux"
 import { combineReducers } from "redux";
 import productsReducer from "./products/productsReducer"
 import cartReducer from "./cart/cartProductReducer";


 const rootReducer = combineReducers({
     productsState : productsReducer ,
     cartProductState : cartReducer ,
   
 })

 export default rootReducer;