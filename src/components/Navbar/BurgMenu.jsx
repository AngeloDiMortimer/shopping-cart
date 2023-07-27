import { useState } from "react";
import { Link } from "react-router-dom";

const BurgMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [isHidden, setIsHidden] = useState("");

    const handleOpen = () => {
        setToggle(!toggle);
        if (!isHidden) {
            setIsHidden("open");
            } else setIsHidden("");
    }

    return (
        <>
            <button id="menu-btn" className={`block hamburger md:hidden focus:outline-none ${isHidden}`} 
            onClick={handleOpen}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>

            { toggle &&
                <div className="md:hidden">
                    <div id="menu" className={`absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                        <Link to="home" className="">Home</ Link>
                        <Link to="products" className="">Products</ Link>
                        <Link to="about" className="">About Us</ Link>
                    </div>
                </div> 
            } 
           
        </>
    )
}

export default BurgMenu;