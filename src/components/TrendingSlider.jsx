import { IconContext } from "react-icons";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";

const TrendingSlider = () => {
    return (
        <div className="trending">
            <div className="container">
                <div className="title-btns">
                    <h3>Trending Now</h3>
                    <div className="btns">
                        <button title="scroll left">
                        <IconContext.Provider value={{size:26}}>
                                <div>
                                    <BsFillArrowLeftSquareFill />
                                </div>
                            </IconContext.Provider>
                            
                        </button>
                        <button title="scroll right">
                            <IconContext.Provider value={{size:26}}>
                                    <div>
                                        <BsFillArrowRightSquareFill />
                                    </div>
                                </IconContext.Provider>
                        </button>
                    </div>
                </div>

                <div className="row-container" id="slider">
                    
                </div>
            </div>
        </div>
    )
}

export default TrendingSlider;

