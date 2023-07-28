import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";


function App() {
 //1. Work on header and Navbar
 //2. Get Api to work and display items

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
