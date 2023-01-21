import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import TelevisionData from '../Components/Television/TelevisionData'
import PagenotFound from '../Pages/PageNotFound'
import {CartHome} from "../Components/CartV/CartHome"
import Products from "../Components/Products/Products";
import Homepage from "../Components/Home/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import ProductsPage from "../Components/Products/ProductsPage";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<PagenotFound/>}></Route> 
        <Route path="ProductsPage" element={<ProductsPage />} ></Route>
       <Route path='products/:id' element={<SingleProduct />} />
       <Route path='/tv-home' element={<TelevisionData />} />
       <Route path='/products' element={<Products />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/login' element={<Login />} />
       <Route path='/cart' element={<CartHome />} />
       <Route path='ProductsPage/products/:id' element={<SingleProduct />} />

       
    </Routes>
  );
};

export default AllRoutes;
