import { Link } from "react-router-dom";
import products from "../../data/productData";

const ItemJewel = () => {
    const filteredItems = products.filter((item) => item.category === "jewelery");
    return (
        <>
        {filteredItems.map((item) => (
            <div key={item.id} className="product-normal outline outline-2 outline-gray-300 
            flex flex-col items-center text-center p-2 h-80
             cursor-pointer transition-all duration-500 hover:outline-gray-900">
                <Link onClick={() => window.scrollTo(0, 0)}
                to={`/products/item/${item.id}`}
                >
                    <div className="product-header flex flex-col items-center justify-center h-44">
                        <img className="w-16" src={item.image} alt={`product${item.id}`} />
                    </div>
                    <div className="product-details">
                        <p>{item.title}</p>
                        <p className="item-price font-semibold text-xl">{`$${item.price}`}</p>
                    </div>
                </Link>
            </div>
        ))}
        </>
    )
}

export default ItemJewel;