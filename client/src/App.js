import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";


import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  const { mediumScreen } = useMedia();
  return (
    <Box className="App">
      {mediumScreen ? <Nav /> : <NavMobile />}
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
