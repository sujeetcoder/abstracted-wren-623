import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";
import React,{Suspense,lazy} from "react";
import Loading from "./Loading";
import Footer from "./Components/Footer/Footer"
const AllRoutes= lazy(()=>import('./Routes/AllRoutes'))


function App() {
  const { mediumScreen } = useMedia();
  return (
    <Box className="App">

     <Suspense fallback={<div><Loading /> </div>}>
           {mediumScreen? <Nav/> : <NavMobile/>}
      <AllRoutes />
    <Footer />
      </Suspense>

    </Box>
  );
}

export default App;
