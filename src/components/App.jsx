import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";


function App() {
  const { name } = useParams();
 //1. Work on header and Navbar

  return (
    <>
    <Navbar />
    {name === "products" ? (
      <Products />
    ) : name === "about" ? (
      <AboutUs />
    ) : (
      <Home />
    )}
    
    </>
  )
}

export default App
