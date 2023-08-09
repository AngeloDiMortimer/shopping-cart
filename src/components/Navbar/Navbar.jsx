import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import BurgMenu from "./BurgMenu";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../pages/ItemsPage";
import EmptyCart from "../EmptyCart";
import CartWithItems from "../CartWithItems";


const Navbar = () => {
    const [cart, setCart] = useState(false);

    const { cartItem } = useContext(CartContext);

    const openCart = () => {
        setCart(!cart);
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={openCart}
                className={`page-overlay ${cart ? "open-flex" : ""}`}
            ></div>

            {/* cart */}
            <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
                <div className="cart-title-btn p-4 md:p-8">
                    <h2 className="cart-full-h2 text-2xl md:text-4xl">
                        Your shopping cart ({cartItem.length})
                    </h2>
                    <button onClick={openCart} className="close-cart" >X</button>
                </div>

                <div className="cart-body">
                    {cartItem.length < 1 ? (
                        <EmptyCart openCart={openCart} />
                    ) : (
                        <CartWithItems />
                    )}
                </div>
            </div>

            <div className="navbar sticky top-0 shadow-md mx-auto p-6 bg-red-500 text-slate-50 z-40">
                <div className="flex items-center justify-between ">
                    <Link to="/">
                        <div className="logo">
                            <h1 className="text-2xl font-bold md:text-3xl">TrendyHeaven</h1>
                        </div>
                    </Link>

                    <div className="flex items-center">
                        <div className="hidden md:flex space-x-6 mr-8 text-xl">
                            <Link to="/" className="">Home</ Link>
                            <Link to="products/all" className="">Products</ Link>
                            <Link to="about" className="">About Us</ Link>
                        </div>



                        {/* Cart Icon */}
                        <div
                            data-array-length={cartItem.length}
                            onClick={openCart}
                            className={`icon ${
                                cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                            }`}
                        >
                            <IconContext.Provider value={{color: "white", size: 26, className: "mr-4 cursor-pointer"}}> 
                                <FaCartShopping />
                                
                            </IconContext.Provider>
                        </div>

                        
                        {/* Mobile Menu*/}
                        <BurgMenu />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Navbar;