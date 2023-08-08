/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Banner = ({ title, text, img }) => {
    return (
        <div className="banner mt-4 flex flex-col items-center md:p-4">
            <div className="container">
                <div className="banner-container flex flex-col md:flex-row h-auto justify-between">
                    <div className="text-side flex flex-col px-6 py-8 items-center justify-center bg-red-500 text-slate-50 md:w-1/2">
                        <div className="text flex flex-col items-center md:items-start justify-center">
                            <h2 className="font-semibold text-center text-5xl md:text-5xl md:text-left mb-4">{title}</h2>
                            <p className="mb-6 text-center md:text-left">{text}</p>
                            <Link to="/products/all">
                                <button className="w-28 text-xl p-2 cursor-pointer 
                                rounded-md border-solid border-2 border-slate-50 
                                transition-all duration-300
                                hover:bg-slate-50 hover:text-gray-900">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="img-side w-1/2 hidden md:flex">
                        <img src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;