import { IconContext } from "react-icons";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";


const ProductsHeader = () => {
    const [btnName, setBtnName] = useState("All");

    const handleBtnName = (e) => {
        setBtnName(e);
    };

    return (
        <>
            <div className="container">
                <div className="produ-header p-4 flex flex-col items-center">
                    <div className="title-home flex items-center w-full mb-12">
                        
                        <div className="home-arrow flex items-start">
                            <Link to="/">
                                <div className="home-icon flex items-center">
                                    <IconContext.Provider value={{ size: 20}}> 
                                        <div>
                                            <FaAngleLeft />
                                        </div>
                                    </IconContext.Provider>
                                    <h3 className="text-lg">Home</h3>
                                </div>
                            </Link>    
                        </div>

                        <h3 className="flex items-center text-center mx-auto uppercase text-4xl font-semibold">{btnName}</h3>
                    </div>

                    <div className="filter-btns flex items-center flex-wrap justify-center gap-2 w-full">
                        <Link to="all" onClick={() => handleBtnName("all")}>
                            <button className="w-20 text-xl p-2 cursor-pointer 
                            border-solid border-2 border-gray-900 
                            transition-all duration-300
                            hover:bg-gray-900 hover:text-slate-50">All</button>
                        </Link>
                        
                        <Link to="mens_clothing" onClick={() => handleBtnName("men's clothing")}>
                            <button className="w-auto text-xl p-2 cursor-pointer 
                            border-solid border-2 border-gray-900 
                            transition-all duration-300
                            hover:bg-gray-900 hover:text-slate-50">{`Men's clothing`}</button>
                        </Link>
                        
                        <Link to="womens_clothing" onClick={() => handleBtnName("women's clothing")}>
                            <button className="w-auto text-xl p-2 cursor-pointer 
                            border-solid border-2 border-gray-900 
                            transition-all duration-300
                            hover:bg-gray-900 hover:text-slate-50">{`Women's clothing`}</button>
                        </Link>
                        
                        <Link to="jewelery" onClick={() => handleBtnName("jewelery")}>
                            <button className="w-auto text-xl p-2 cursor-pointer 
                            border-solid border-2 border-gray-900 
                            transition-all duration-300
                            hover:bg-gray-900 hover:text-slate-50">Jewelery</button>
                        </Link>

                        <Link to="electronics" onClick={() => handleBtnName("electronics")}>
                            <button className="w-auto text-xl p-2 cursor-pointer 
                            border-solid border-2 border-gray-900 
                            transition-all duration-300
                            hover:bg-gray-900 hover:text-slate-50">Electronics</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsHeader;