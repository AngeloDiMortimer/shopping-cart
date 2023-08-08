import products from "../data/ProductData";
import TrendingSlider from "../components/TrendingSlider";
import { useParams } from "react-router-dom";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const ItemsPage = () => {
    const { id } = useParams();
    const item = products.filter((item) => item.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    

    const { addToCart } = useContext(CartContext);

    const increase = () => {
        if (quantity >= 1 ) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calcPrice = (quantity) => {
        return quantity * item[0].price;
    };

    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    };

    return (
        <>
            <div 
            onAnimationEnd={() => setNotify(false)}
            className={`notify ${notify ? "slide-in" : ""}`}
            >
                <p>Item has been added to the cart</p>
            </div>

            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <div className="product-left">
                            <div className="big-img">
                                <img 
                                src={item[0].image} alt="product"
                                />
                            </div>
                        </div>

                        <div className="product-right">
                            <p className="product-spec">{item[0].description}</p>
                            
                            <div className="product-quant">
                                <p>Quantity</p>
                                <div className="product-btns">
                                    <button onClick={decrease}>-</button>
                                    <p className="quantity">{quantity}</p>
                                    <button onClick={increase}>+</button>
                                </div>
                            </div>
                            <p className="product-price">{calcPrice(quantity)}</p>
                        </div>

                        <div className="atc-buy">
                            <button
                                onClick={() => {
                                    addToCart(item[0]);
                                    showNotify();
                                }}
                                className="atc-btn"
                            >
                                Add to cart
                            </button>
                            <button className="buy-btn">Buy now</button>
                        </div>
                    </div>
                </div>
                
                <TrendingSlider />
            </div>
        </>
    )
}

export default ItemsPage;