import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { wishListContext } from "./WishListContext";

const ItemDetail = ({item}) => {

    const navigate = useNavigate();
    const [countItem, setCountItem] = useState(0);
    const [ wishListStatus, setWishListStatus ] = useState({itemAdded: false, itemExists: false});
    const { addItem, stockInCart } = useContext(cartContext);
    const { addWishItem, isInWishList } = useContext(wishListContext);

    const onAdd = (quantityToAdd) => {
        setCountItem(quantityToAdd);
        addItem(item, quantityToAdd);
    }

    const onAddWishList = () => {
        const itemExists = isInWishList(item.id)
        const itemAdded = addWishItem(item);
        setWishListStatus({itemAdded, itemExists});
    }

    const goToCart = () => {
        navigate('/cart');
    }

    const currentStock = item.stock - stockInCart(item.id);

    return (
        <div className="itemDetailContainer">
            <div className="itemDetailImageDiv">
                <img alt={item.title} className="itemDetailImage" src={item.pictureUrl}/>
            </div>            
            <div className="itemDetail">
                <h1 className="itemDetailTitle">{item.title}</h1>
                <h2 className="itemDetailPrice">Price $ {item.price}</h2>
                <div className="itemDetailDescription">
                    <p className="itemDetailDescSet">Set: {item.set}</p>
                    <p className="itemDetailDescRarity">Rarity: {item.rarity}</p>
                    <p className="itemDetailDescNumber">Number: {item.number}</p>
                    <p className="itemDetailDescType">Type: {item.type}</p>
                </div>
                <div className="itemDetailCategory">
                    {
                        item["category"]["map"]((category, index) => {
                            return <p className="itemDetailCategoryItem" key={index}>{category}</p>
                        })
                    }
                </div>
                <div className="itemDetailPurchaseMenu">
                    <p className="itemDetailPurchaseStock">Stock: {currentStock}</p>
                </div>
                {
                    countItem > 0 
                    ?
                        <button onClick={goToCart}>Complete Purchase</button>
                    :
                        currentStock > 0 
                        ?
                            <div>
                                {
                                    !wishListStatus.itemExists && !wishListStatus.itemAdded
                                    ?
                                        <button onClick={onAddWishList}>Add to Wish List</button> 
                                    :
                                        wishListStatus.itemExists
                                        ?
                                            <p>Item Already exists in Wish List</p>
                                        :
                                            <p>Item Added to Wish List</p>
                                }
                                
                                <div>
                                    
                                    <ItemCount init={1} stock={currentStock} onAdd={onAdd}/>
                                </div>
                            </div>        
                        :
                            <p>No more stock</p>
                }
            </div>
        </div>
        
    )
}

export default ItemDetail;