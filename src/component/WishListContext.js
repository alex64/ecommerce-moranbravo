import { createContext } from "react";
import { useState } from "react";

export const wishListContext = createContext();
const { Provider } = wishListContext;

const WishListContext = ({children}) => {
    const [wishList, setWishList ] = useState([]);

    const addWishItem = (item) => {
        if(!isInWishList(item.id)) {
            setWishList([...wishList, item]);
            return true;
        }
        return false;
    }

    const removeItem = (itemId) => {
        setWishList(wishList.filter(wishListItem=>wishListItem.id !== itemId));
    }

    const clearWishList = () => {
        setWishList([]);
    }

    const isInWishList = (id) => {
        let wishListResult = wishList.find((wishListItem) => wishListItem.id === id);
        return wishListResult !== undefined?true:false;
    }

    const isWishListEmpty = () => {
        return wishList.length === 0;
    }

    const whisListContextValue = {
        wishList,
        addWishItem,
        removeItem,
        clearWishList,
        isWishListEmpty,
        isInWishList
    };

    return (
        <Provider value={whisListContextValue}>
            {children}
        </Provider>
    )
}

export default WishListContext;