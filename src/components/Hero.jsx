import Main1 from "../assets/images/men_clothing.jpg";
import Main2 from "../assets/images/women_clothing.jpg";
import Main3 from "../assets/images/jewelery.jpg";
import Main4 from "../assets/images/electronics.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="home-container p-4 flex items-center justify-center">
                <div className="container">
                    <div className="grid-container">
                        
                        <div className="featured grid-one">
                            <Link to="products/mens_clothing" onClick={() => window.scrollTo(0, 0)}>
                                <div id="img1" className="lil-overlay"></div>
                                <img src={Main1} alt="img1" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description py-2 md:text-4xl">{"Men's clothing"}</p>
                                </div>
                            </Link>
                        </div>

                        <div className="featured grid-two">
                            <Link to="products/womens_clothing" onClick={() => window.scrollTo(0, 0)}>
                                <div id="img2" className="lil-overlay"></div>
                                <img src={Main2} alt="img2" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description py-2 md:text-4xl">{"Women's clothing"}</p>
                                </div>
                            </Link>
                        </div>

                        <div className="featured grid-four">
                            <Link to="products/jewelery" onClick={() => window.scrollTo(0, 0)}>
                                <div id="img3" className="lil-overlay"></div>
                                <img src={Main3} alt="img3" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description py-2 md:text-4xl">{"Jewelery"}</p>
                                </div>
                            </Link>
                        </div>

                        <div className="featured grid-four-low">
                            <Link to="products/electronics" onClick={() => window.scrollTo(0, 0)}>
                                <div id="img4" className="lil-overlay"></div>
                                <img src={Main4} alt="img4" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description py-2 md:text-4xl">{"Electronics"}</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;