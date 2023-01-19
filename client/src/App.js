import { Box } from "@chakra-ui/react";
import "./App.css";

import { CartHome } from "./Components/CartV/CartHome";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { mediumScreen } = useMedia();
  return (
    <Box className="App">
      {mediumScreen?<Nav/>:<NavMobile/>}
      <Box h="40px"></Box>
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
