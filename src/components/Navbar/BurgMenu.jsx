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
                    <div id="menu" className={`absolute z-40 font-semibold bg-gray-900 flex flex-col items-center w-full self-end py-8 mt-10 space-y-6 sm:w-auto sm:self-center right-0 drop-shadow-md`}>
                        
                        <div onClick={handleOpen}>
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</ Link>
                        </div>
                        
                        <div onClick={handleOpen}>
                            <Link to="products/all" onClick={() => window.scrollTo(0, 0)}>Products</ Link>
                        </div>

                        <div onClick={handleOpen}>
                            <Link to="about" onClick={() => window.scrollTo(0, 0)}>About Us</ Link>
                        </div>

                    </div>
                </div> 
            } 
           
        </>
    )
}

export default BurgMenu;