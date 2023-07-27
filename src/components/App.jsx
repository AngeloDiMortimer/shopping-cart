import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";


function App() {
 //1. Work on header and Navbar

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
