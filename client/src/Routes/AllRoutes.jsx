import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import TelevisionData from '../Components/Television/TelevisionData'
import Home from '../Pages/Home'
import PagenotFound from '../Pages/PageNotFound'

import Products from "../Components/Products/Products";
import Homepage from "../Components/Home/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<PagenotFound/>}></Route> 

       <Route path='products/:id' element={<SingleProduct />} />

       <Route path='/tv-home' element={<TelevisionData />} />
       <Route path='/products' element={<Products />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
