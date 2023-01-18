import { Route, Routes } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<h1>Hello</h1>}></Route>
      <Route path="/singleproduct" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
