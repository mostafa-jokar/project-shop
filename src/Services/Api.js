import axios from "axios" ;

// const BASE_URL = "https://fakestoreapi.com" ;
// const BASE_URL = "https://api-project-shop.herokuapp.com" ;
// const BASE_URL = "http://localhost:3000" ;

const getProducts = async ()=>{
    const response = await axios(`${BASE_URL}/products`)
    .then(response => console.log(response.data))
    return response.data ;
}
const getSubMenue = async ()=>{
    const response = await axios(`${BASE_URL}/brands `)
    .then(response => console.log(response.data))
    return response.data ;   
}






export {getSubMenue}
export {getProducts}
