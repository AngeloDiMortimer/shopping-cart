import products from "../../data/ProductData";

const ProductsItemWomen = () => {
    const filteredItems = products.filter((item) => item.category === "women's clothing");
    return (
        <>
        {filteredItems.map((item) => (
            <div key={item.id} className="product-normal outline outline-2 outline-gray-300 
            flex flex-col items-center text-center p-2 h-80
             cursor-pointer transition-all duration-500 hover:outline-gray-900">
                <div className="product-header flex flex-col items-center justify-center h-56">
                    <img className="w-16" src={item.image} alt={`product${item.id}`} />
                </div>
                <div className="product-details">
                    <p>{item.title}</p>
                    <p className="item-price font-semibold text-xl">{`$${item.price}`}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default ProductsItemWomen;