import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";

const Home = () => {
    return (
        <div>
            <Hero />
            <ProudProducts />
            <Link to="/about/example"> To example!</Link>
        </div>
    )
}

export default Home;