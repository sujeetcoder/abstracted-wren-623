import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import TelevisionData from '../Components/Television/TelevisionData'
import Home from '../Pages/Home'
import PagenotFound from '../Pages/PageNotFound'
import Products from "../Components/Products/Products";
import Homepage from "../Components/Home/Homepage";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PagenotFound/>}></Route>
       <Route path='/productdetails' element={<SingleProduct />} />
       <Route path='/tv-home' element={<TelevisionData />} />
       <Route path='/products' element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
