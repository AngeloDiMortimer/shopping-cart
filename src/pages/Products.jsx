import { Outlet } from "react-router-dom";
import ProductsHeader from "../components/ProductsHeader";

const Products = () => {
    return (
        <div className="min-h-screen">
            
            <ProductsHeader />
            <Outlet />
        </div>
    )
}

export default Products;