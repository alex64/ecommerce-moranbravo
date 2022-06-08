import { memo } from "react";
import CartDetail from "./CartDetail";

const CartList = ({cartList, deleteElement}) => {
    return (
        <div className="cartList">
            {
                cartList.map(cartItem => {
                    return <CartDetail key={cartItem.item.id} cartDetail={cartItem} deleteElement={deleteElement}/>
                })
            }
        </div>
    )
}

export default memo(CartList);