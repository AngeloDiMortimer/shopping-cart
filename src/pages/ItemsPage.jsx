import products from "../data/productData";
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
        const numb = quantity * item[0].price;
        
        return numb.toFixed(2);
    };

    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    };

    const productPrice = calcPrice(quantity);

    return (
        <>
            <div 
            onAnimationEnd={() => setNotify(false)}
            className={`notify ${notify ? "slide-in" : ""}`}
            >
                <p className="p-4">Item has been added to the cart</p>
            </div>

            <div className="product-page-div mt-16 flex flex-col items-center justify-center p-4 gap-24">
                <div className="container ">
                    <div className="product-div flex flex-col md:flex-row items-center gap-14">
                        <div className="product-left">
                            <div className="big-img">
                                <img className="w-96"
                                src={item[0].image} alt="product"
                                />
                            </div>
                        </div>

                        <div className="product-right flex flex-col gap-1">
                            <p className="product-name font-semibold text-3xl">{item[0].title}</p>
                            <p className="product-spec">{item[0].description}</p>
                            
                            <div className="product-quant flex flex-col gap-2">
                                <p className="font-semibold text-xl">Quantity</p>
                                <div className="product-btns flex gap-2">
                                    <button className="border-solid border-2 border-gray-900 
                                    transition-all duration-300
                                    hover:bg-gray-900 hover:text-slate-50 w-8"
                                    onClick={decrease}>-</button>
                                    <p className="quantity">{quantity}</p>
                                    <button  className="
                                    border-solid border-2 border-red-500 
                                    transition-all duration-300
                                    hover:bg-red-500 hover:text-slate-50 w-8"
                                    onClick={increase}>+</button>
                                </div>
                            </div>
                            <p className="product-price font-semibold text-2xl">{`$ ${productPrice}`}</p>
                            <div className="atc-buy flex gap-4">
                            <button
                                onClick={() => {
                                    addToCart(item[0]);
                                    showNotify();
                                }}
                                className="atc-btn border-solid border-2 border-gray-900 
                                transition-all duration-300
                                hover:bg-gray-900 hover:text-slate-50 p-3"
                            >
                                Add to cart
                            </button>
                            <button className="buy-btn border-solid border-2 border-red-500 
                                    transition-all duration-300
                                    hover:bg-red-500 hover:text-slate-50 text p-3">Buy now</button>
                        </div>
                        </div>

                       
                    </div>
                </div>
                
                
            </div>
            <TrendingSlider />
        </>
    )
}

export default ItemsPage;