import { useContext } from "react";
import { wishListContext } from "./WishListContext";
import WishListList from "./WishListList";
import { useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";

const WishList = () => {

    const { wishList, removeItem, isWishListEmpty } = useContext(wishListContext);
    const { addItem, isStockAvailable } = useContext(cartContext);
    const navigate = useNavigate();

    const handleBuyItem = () => {
        navigate('/');
    }
 
    const deleteWishListItem = (productId) => {
        removeItem(productId);
    }

    const addWishListItem = (product) => {
        if(isStockAvailable(product.id, 1)) {
            addItem(product, 1);
            return true;
        }
        else {
            return false;
        }
    }

    return (
        isWishListEmpty() 
        ?
            <div>
                <p>Wish List is Empty</p>
                <button onClick={handleBuyItem}>Add Item</button>
            </div>
        :
            <div className="wishList">
                <WishListList wishListList={wishList} deleteElement={deleteWishListItem} addElement={addWishListItem}/>
            </div>
    );
}

export default WishList;