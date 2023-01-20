import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  const { mediumScreen } = useMedia();
  return (
    <Box className="App">
      {mediumScreen?<Nav/>:<NavMobile/>}
      <Box h="50px"></Box>
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
