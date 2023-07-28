import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <Hero />
            <Link to="/about/example"> To example!</Link>
        </div>
    )
}

export default Home;