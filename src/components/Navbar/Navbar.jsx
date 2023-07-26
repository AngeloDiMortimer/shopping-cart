import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import BurgMenu from "./BurgMenu";

const Navbar = () => {
    

    return (
        <div className="relative  mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <h1>Placeholder</h1>
                </div>

                <div className="flex items-center">
                    <div className="hidden md:flex space-x-6 mr-8">
                        <a href="#" className="">Categories</a>
                        <a href="#" className="">Products</a>
                        <a href="#" className="">About Us</a>
                    </div>



                    {/* Cart Icon */}
                    <IconContext.Provider value={{color: "blue", size: 26, className: "mr-4"}}> 
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