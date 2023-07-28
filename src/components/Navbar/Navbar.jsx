import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import BurgMenu from "./BurgMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
    

    return (
        <div className="relative mx-auto p-6 shadow bg-red-500 text-slate-50">
            <div className="flex items-center justify-between ">
                <div className="logo">
                    <h1 className="text-2xl font-bold md:text-3xl">TrendyHeaven</h1>
                </div>

                <div className="flex items-center">
                    <div className="hidden md:flex space-x-6 mr-8">
                        <Link to="home" className="">Home</ Link>
                        <Link to="products" className="">Products</ Link>
                        <Link to="about" className="">About Us</ Link>
                    </div>



                    {/* Cart Icon */}
                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaCartShopping />
                        </div>
                    </IconContext.Provider>
                    
                    {/* Mobile Menu*/}
                    <BurgMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar;