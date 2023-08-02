import { IconContext } from "react-icons";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import TrendingItem from "./TrendingItem";

const TrendingSlider = () => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    }

    return (
        <div className="trending p-4 flex justify-center items-center">
            <div className="container flex flex-col h-auto justify-between">
                <div className="title-btns flex items-center justify-between">
                    <h3 className="font-semibold text-3xl">Trending Now</h3>
                    <div className="btns flex gap-2">
                        <button title="scroll left" onClick={slideLeft}>
                        <IconContext.Provider value={{size:26}}>
                                <div>
                                    <BsFillArrowLeftSquareFill />
                                </div>
                            </IconContext.Provider>
                            
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <IconContext.Provider value={{size:26}}>
                                    <div>
                                        <BsFillArrowRightSquareFill />
                                    </div>
                                </IconContext.Provider>
                        </button>
                    </div>
                </div>

                <div className="row-container" id="slider">
                    <TrendingItem />
                </div>
            </div>
        </div>
    )
}

export default TrendingSlider;

