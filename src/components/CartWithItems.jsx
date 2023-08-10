import { useContext, useEffect, useState } from "react"
import { CartContext } from "../pages/ItemsPage"
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const CartWithItems = () => {
    const { cartItem, setCartItem } = useContext(CartContext);

    const [totalPrice, setTotalPrice] = useState(0);

    

    useEffect(() => {
        const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItem]);

    return (
        <>
            <div className="full-cart-div p-4 h-3/4 overflow-y-scroll">
                <div className="full-cart flex flex-col gap-6 mb-4">
                    {cartItem.map((item, id) =>
                        cartItem.length !== 0 ? (
                            <CartItem key={id} item={item} setCartItem={setCartItem} />
                        ) : (
                            <EmptyCart key={id} />
                        )
                    )}
                </div>
            </div>
            <div className="subtotal-div p-4 border-t-2 border-gray-900 
            border-dashed">
                <div className="sub-right">
                    <p className="text-xl font-semibold">Subtotal</p>
                    <p className="total-price text-3xl font-semibold">{"$" + totalPrice}</p>
                </div>
                <div className="sub-left mt-3">
                    <button className="rounded-md p-2 border-solid border-2 border-gray-900 font-semibold
                        transition-all duration-300
                        hover:bg-gray-900 hover:text-slate-50">Go to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartWithItems;