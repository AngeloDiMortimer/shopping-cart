import ProductsItemElec from "./ProductsItemElec";

const Electronics = () => {
    return (
        <>
        <div className="proud-container p-4 flex flex-col items-center"> 
            <div className="container">
                <div className="products-grid">
                    <ProductsItemElec />
                </div>

            </div>
        </div>
        </>
    )
}

export default Electronics;