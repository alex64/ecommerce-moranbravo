import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContext = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart([...cart, {item, quantity}]);
        }
        else {
            console.log("Updating quantity");
            setCart(cart.map(cartItem => {
                if(cartItem.item.id === item.id) {
                    console.log(`Previous: ${cartItem.quantity}`);
                    cartItem.quantity += quantity;
                }
                return cartItem;
            }));
        }
    }

    const removeItem = (itemId) => {

    }

    const clear = () => {

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
        clear,
        isInCart
    };

    return (
        <Provider value={cartContextValue}>
            {children}
        </Provider>
    )
}

export default CartContext;