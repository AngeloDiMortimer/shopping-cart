import { Link } from "react-router-dom";
import products from "../data/ProductData";

const TrendingItem = () => {
    const filteredItems = products.filter((item) => item.id >= 8); //filters the items
    
    return (
        <>
        {filteredItems.map((item) => (
            <div key={item.id} className="product-normal outline outline-2 outline-gray-300 
            flex flex-col items-center justify-between text-center p-2 h-80
             cursor-pointer transition-all duration-500 hover:outline-gray-900">
                <Link
                to={`/products/item/${item.id}`}
                >
                    <div className="product-header flex flex-col items-center justify-center h-44">
                        <img className="w-16" src={item.image} alt={`product${item.id}`} />
                    </div>
                    <div className="product-details w-60 text-ellipsis">
                        <p>{item.title}</p>
                        
                    </div>
                    <p className="item-price font-semibold text-xl">{`$${item.price}`}</p>
                </Link>
            </div>
        ))}
        </>
    )
}

export default TrendingItem;