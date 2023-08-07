import { IconContext } from "react-icons";
import { FaFacebookSquare, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-red-500 flex flex-col text-slate-50 p-4 py-6 justify-center items-center">
            <div className="container flex items-center gap-4 text-center md:text-left flex-col-reverse md:flex-row justify-between">
                <div className="logo-container flex flex-col gap-2">

                    <Link to="/">
                        <div className="logo">
                                <h1 className="text-2xl font-bold md:text-3xl">TrendyHeaven</h1>
                        </div>
                    </Link>

                    <div className="social-container flex items-center">
                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaFacebookSquare />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaTwitter />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaYoutube />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaPinterest />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{color: "white", size: 26, className: "mr-4"}}> 
                        <div>
                            <FaInstagram />
                        </div>
                    </IconContext.Provider>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                            <div className="flex flex-row  gap-4 text-white text-center md:text-xl">
                                <Link to="/" >Home</ Link>
                                <Link to="products" >Products</ Link>
                                <a href="#" >FAQ</a>
                                <Link to="about" className="">About</ Link>
                            </div>
                            <div className="text-center text-lg text-white mt-6 items-start">
                                Copyright &copy; Angelo Martínez 2023
                            </div>                            
                </div>  
            </div>



        </footer>
    )
}

export default Footer;