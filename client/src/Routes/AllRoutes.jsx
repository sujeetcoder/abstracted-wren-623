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
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import AdminRoute from "./AdminRoute";
import Admin from "../Pages/Admin";
import { PaymentForm } from "../Components/CartV/CustomerDetailsForm/CustomerForm";



const AllRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<PagenotFound/>}></Route> 
       <Route path='products/:id' element={<SingleProduct />} />
       <Route path='/tv-home' element={<TelevisionData />} />
       <Route path='/products' element={<Products />} />
       <Route path='/signup' element={<AuthRoute><SignUp /></AuthRoute> } />
       <Route path='/login' element={<AuthRoute><Login /> </AuthRoute> } />
       <Route path='/cart' element={<PrivateRoute><CartHome /> </PrivateRoute> } />
       <Route path='/admin' element={<AdminRoute><Admin /> </AdminRoute> } />
       <Route path="/payment" element={<PaymentForm />}></Route>
       
    </Routes>
  );
};

export default AllRoutes;
