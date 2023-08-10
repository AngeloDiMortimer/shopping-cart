import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { CartContext } from "../pages/ItemsPage";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

 
  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem}}>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </CartContext.Provider>
  )
}

export default App
