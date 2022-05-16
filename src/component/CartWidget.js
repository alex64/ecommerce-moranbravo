import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

const CartWidget = () => {

    const { totalQuantity } = useContext(cartContext);

    return (
        <Link className="cartLink" to="/cart">
            <div className="cartIcon">
                <span className="material-icons">
                    shopping_cart
                </span>
                {totalQuantity}
            </div>
            
        </Link>
    )
}

export default CartWidget;