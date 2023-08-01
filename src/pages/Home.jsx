import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import Banner from "../components/Banner";
import Banner1 from "../assets/images/looking_phone.jpg";

const Home = () => {
    return (
        <div>
            <Hero />
            <ProudProducts />
            <Banner 
                title="Fast and easy shopping"
                text="Our products have been sorted in different categories so that you can easily look for what you want"
                img={Banner1}
            />
            <Link to="/about/example"> To example!</Link>
        </div>
    )
}

export default Home;