import ItemElec from "./ItemElec";

const Electronics = () => {
    return (
        <>
        <div className="proud-container p-4 flex flex-col items-center"> 
            <div className="container">
                <div className="products-grid">
                    <ItemElec />
                </div>

            </div>
        </div>
        </>
    )
}

export default Electronics;