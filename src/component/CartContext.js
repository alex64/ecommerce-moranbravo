import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContext = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const calculateTotalPrice = (addedItemPrice) => {
        setTotalPrice(totalPrice + addedItemPrice);
    }

    const calculateTotalQuantity = (addedQuantity) => {
        setTotalQuantity(totalQuantity + addedQuantity);
    }

    const addItem = (item, quantity) => {
        calculateTotalPrice(item.price * quantity);
        calculateTotalQuantity(quantity);
        if(!isInCart(item.id)) {
            setCart([...cart, {item, quantity}]);
        }
        else {
            setCart(cart.map(cartItem => {
                if(cartItem.item.id === item.id) {
                    cartItem.quantity += quantity;
                }
                return cartItem;
            }));
        }
    }

    const removeItem = (itemId) => {
        const itemToRemove = getCartItem(itemId);
        calculateTotalPrice(itemToRemove.item.price * itemToRemove.quantity * -1);
        calculateTotalQuantity(itemToRemove.quantity * -1);
        setCart(cart.filter(cartItem=>cartItem.item.id !== itemId));
    }

    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    }

    const isInCart = (id) => {
        let cartResult = cart.find((cartItem) => cartItem.item.id === id);
        return cartResult !== undefined?true:false;
    }

    const getCartItem = (id) => {
        return cart.find((cartItem) => cartItem.item.id === id);
    }

    const cartContextValue = {
        cart,
        totalPrice,
        totalQuantity,
        addItem,
        removeItem,
        clearCart,
        isInCart
    };

    return (
        <Provider value={cartContextValue}>
            {children}
        </Provider>
    )
}

export default CartContext;