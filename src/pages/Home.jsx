import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl">This is the home page!</h1>
            <Hero />
            <Link to="/about/example"> To example!</Link>
        </div>
    )
}

export default Home;