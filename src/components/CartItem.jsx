/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/ItemsPage";

const CartItem = ( { item }) => {
    const [quantity, setQuantity] = useState(1);
    const { cartItem, setCartItem } = useContext(CartContext);
    const [deleteItem, setDeleteItem] = useState(cartItem);

    const increase = () => {
        if (quantity >= 1) {
          setQuantity(quantity + 1);
        }
      };
    
      const decrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const calcPrice = (quantity, item) => {
        const numb = quantity * item;
        return numb.toFixed(2);
      };

      const removeFromCart = (id) => {
        const updateCart = cartItem.filter((item) => item.id !== id);
        setDeleteItem(updateCart);
        const json = JSON.stringify(cartItem.id);
        localStorage.removeItem("cartItem", json);
      };

      useEffect(() => {
        setCartItem(deleteItem);
      }, [deleteItem, setCartItem]);


    return (
        <>
            <div className="cart-item flex flex-col md:flex-row items-center gap-4">
            <div className="cart-img">
                <img className="w-32" src={item.image} alt="product" />
            </div>
            <div className="cart-middle flex flex-col">
                <p className="cart-name text-lg font-semibold text-center md:text-left">{item.title}</p>
                <div className="cart-btns flex gap-2">
                  <button className="border-solid border-2 border-gray-900 
                  transition-all duration-300
                  hover:bg-gray-900 hover:text-slate-50 w-8" onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button className="border-solid border-2 border-red-500 
                  transition-all duration-300
                  hover:bg-red-500 hover:text-slate-50 w-8" onClick={increase}>+</button>
                </div>
                <div className="cart-right flex items-center justify-between gap-8">
                  <p className="cart-price font-semibold text-xl">{`$ ${calcPrice(quantity, item.price)}`}</p>
                  <button onClick={() => removeFromCart(item.id)} className="close-cart" >X</button>
                </div>
            </div>
            
            </div>
        </>
    )    
}

export default CartItem;