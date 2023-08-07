import { FaGithub } from "react-icons/fa6";
import { IconContext } from "react-icons";

const AboutUs = () => {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-2xl text-center">
            <div className="about-container flex flex-col gap-8">
                    <h1>This is a fictional page and none of the products displayed here exist.</h1>
                    <h1>Products images and information thanks to: Fake Store API.</h1>
                    <div className="flex gap-2 items-center justify-center">
                        <h1>Angelo Martínez &copy; 2023 </h1>
                        <a href="https://github.com/AngeloDiMortimer">
                        <IconContext.Provider value={{size: 26}}> 
                                <FaGithub />
                        </IconContext.Provider>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default AboutUs;