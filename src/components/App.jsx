import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function App() {
 //1. Work on header and Navbar
 //2. Get Api to work and display items

  return (
    <>
    <Navbar />
    <Outlet />
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
