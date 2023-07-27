import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl">This is the home page!</h1>
            <Link to="/about/example"> To example!</Link>
        </div>
    )
}

export default Home;