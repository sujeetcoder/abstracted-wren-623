import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";
// import AllRoutes from "./Routes/AllRoutes";
import React,{Suspense,lazy} from "react";
import Loading from "./Loading";

const AllRoutes= lazy(()=>import('./Routes/AllRoutes'))
function App() {
  // const {mediumScreen} = useMedia()
  
  return (
    <Box className="App">
      {/* {mediumScreen? <Nav/> : <NavMobile/>} */}
      {/* <Nav /> */}
      {/* <NavMobile /> */}
      <Suspense fallback={<div><Loading /> </div>}>
      <AllRoutes />
      </Suspense>
    </Box>
  );
}

export default App;
