import { useState } from "react";

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
                    <div id="menu" className={`absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                        <a href="#" className="">Categories</a>
                        <a href="#" className="">Products</a>
                        <a href="#" className="">About Us</a>
                    </div>
                </div> 
            } 
           
        </>
    )
}

export default BurgMenu;