import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";
import React, { Suspense, lazy } from "react";
import Loading from "./Loading";

import Footer from "./Components/Footer/Footer"
import axios from "axios";
import { dataUrl } from "./Utils/AllUrls";
import { useDispatch } from "react-redux";
const AllRoutes= lazy(()=>import('./Routes/AllRoutes'))

function App() {
  const { mediumScreen } = useMedia();
  const dispatch = useDispatch()
  axios.get(`${dataUrl}/users/get/single`, {withCredentials:true}).then((res)=>{
    dispatch({type:"savedata",payload:res.data})
  }).catch((err)=>{
    console.log(err)
  })
  return (
    <Box className="App">
      <Box mt="50px" ></Box>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        {mediumScreen ? <Nav /> : <NavMobile />}
        <AllRoutes />
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
