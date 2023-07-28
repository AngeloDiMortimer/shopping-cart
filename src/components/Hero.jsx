import Main1 from "../assets/images/men_clothing.jpg"

const Hero = () => {
    return (
        <>
            <div className="home-container">
                <div className="container">
                    <div className="grid-container">
                        
                        <div className="featured grid-one">
                            <a href="#">
                                <div id="img1" className="lil-overlay"></div>
                                <img src={Main1} alt="img1" />
                                <p className="main-description">Clothes for men</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;