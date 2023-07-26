import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

    return (
        <div className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <h1>Placeholder</h1>
                </div>

                <div className="hidden md:flex space-x-6">
                <a href="#" className="">Categories</a>
                <a href="#" className="">Products</a>
                <a href="#" className="">About Us</a>
                </div>
                <FaCartShopping />
            </div>
        </div>
    )
}

export default Navbar;