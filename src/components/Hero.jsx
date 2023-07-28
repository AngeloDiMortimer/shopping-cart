import Main1 from "../assets/images/men_clothing.jpg";
import Main2 from "../assets/images/women_clothing.jpg";
import Main3 from "../assets/images/jewelery.jpg";
import Main4 from "../assets/images/electronics.jpg";

const Hero = () => {
    return (
        <>
            <div className="home-container p-4 flex items-center justify-center">
                <div className="container">
                    <div className="grid-container">
                        
                        <div className="featured grid-one">
                            <a href="#">
                                <div id="img1" className="lil-overlay"></div>
                                <img src={Main1} alt="img1" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description md:text-4xl">{"Men's clothing"}</p>
                                </div>
                            </a>
                        </div>

                        <div className="featured grid-two">
                            <a href="#">
                                <div id="img2" className="lil-overlay"></div>
                                <img src={Main2} alt="img2" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description md:text-4xl">{"Women's clothing"}</p>
                                </div>
                            </a>
                        </div>

                        <div className="featured grid-four">
                            <a href="#">
                                <div id="img3" className="lil-overlay"></div>
                                <img src={Main3} alt="img3" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description md:text-4xl">{"Jewelery"}</p>
                                </div>
                            </a>
                        </div>

                        <div className="featured grid-four-low">
                            <a href="#">
                                <div id="img4" className="lil-overlay"></div>
                                <img src={Main4} alt="img4" />
                                <div className="absolute text-slate-50 font-semibold bottom-0 left-0 right-0 px-2 py-2">
                                    <p className="main-description md:text-4xl">{"Electronics"}</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;