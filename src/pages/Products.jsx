import { Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1 className="text-2xl">This is the products page! Feel free to buy</h1>
            <Outlet />
        </div>
    )
}

export default Products;