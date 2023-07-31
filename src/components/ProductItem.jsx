import products from "../data/ProductData";

const ProductItem = () => {
    const filteredItems = products.filter((item) => item.id <= 8); //filters the first 8 items

    return (
        <>
        {filteredItems.map((item) => (
            <div key={item.id} className="product-normal">
                <div className="product-header">
                    <img src={item.image} alt={`product${item.id}`} />
                </div>
                <div className="product-details">
                    <p>{item.title}</p>
                    <p className="item-price">{`$${item.price}`}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default ProductItem;