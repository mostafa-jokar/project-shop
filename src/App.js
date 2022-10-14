import './App.css';
// provider
import { Provider } from 'react-redux';
// import React ,{useContext} from 'react';

////////////////////////////////////////////////////////////////////////////
import {Route , Routes , Navigate} from "react-router-dom";
// redux
import store from './redux/store';
// componenets
import HomePage from './components/homePage/HomePage';
import Singup from "./components/subLogPage/SingUp"
import Login from './components/subLogPage/login';
import ProductsDetailes from './components/productDetailesPage/ProductsDetailes';
import Allproducts from './components/AllProductPage/AllProducts';
import Header from './components/shared/haederComponenets/Header';
import Footer from './components/shared/footer/Footer';
import CartPage from './components/cartPage/CartPage';




function App() {
  // const menueData = useContext(SubMenuProvider)
 
  return (
   
     <Provider store={store}>
          <Header />

      <Routes>
    
        <Route path="/products/:id" element={<ProductsDetailes/>}/>
        <Route path="/productss/:category" element={<Allproducts/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        {/* <Route path="/project-shop" element={<HomePage/>}/> */}
        <Route path="/CartPage" element={<CartPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Singup/>}/>
        <Route path='/*' element={<Navigate to="/HomePage" />} />

      </Routes>

          <Footer/>

     </Provider>
       


    // <div className="App">
    // </div>
  );
}

export default App;
