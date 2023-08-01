import ProductItem from "./ProductItem";


const ProudProducts = () => {


    return (
        <div className="proud-container p-4 flex flex-col items-center"> 
            <div className="container">
                <h2 className="text-2xl mb-6 md:text-4xl font-semibold md:my-12">Products we are proud of</h2>
                <div className="products-grid">
                    <ProductItem />
                </div>

            </div>
        </div>
    )
}

export default ProudProducts;