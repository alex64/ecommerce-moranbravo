import { useContext } from "react";
import { cartContext } from "./CartContext";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();
    const { cart, totalPrice, totalQuantity, removeItem } = useContext(cartContext);
    
    const handleBuyItem = () => {
        navigate('/');
    }

    const deleteCartItem = (productId) => {
        removeItem(productId);
    }

    return (
        totalQuantity === 0
        ?<div className="cartNoItem">
            <p>Cart is Empy</p>
            <button onClick={handleBuyItem}>Buy Items</button>
        </div>
        :<div className="cart">
            <CartList cartList={cart} deleteElement={deleteCartItem}/>
            <div className="cartPrice">
                <h2>Total Price: ${totalPrice}</h2>
                <h3>Items: {totalQuantity}</h3>
            </div>
        </div>
    )
}

export default Cart;