import { Outlet } from "react-router-dom";

const AboutUs = () => {


    return (
        <div>
            <h1 className="text-2xl">This is the About Us page! This is a fake e-commerce</h1>
            <Outlet />
        </div>
    )
}

export default AboutUs;