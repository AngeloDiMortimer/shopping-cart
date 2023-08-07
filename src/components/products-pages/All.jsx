import ProductsItemAll from "./ProductsItemAll";

const All = () => {
    return (
        <>
        <div className="proud-container p-4 flex flex-col items-center"> 
            <div className="container">
                <div className="products-grid">
                    <ProductsItemAll />
                </div>

            </div>
        </div>
        </>
    )
}

export default All;