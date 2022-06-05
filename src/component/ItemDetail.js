import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const navigate = useNavigate();
    const [countItem, setCountItem] = useState(0);
    const { addItem, stockInCart } = useContext(cartContext);

    const onAdd = (quantityToAdd) => {
        setCountItem(quantityToAdd);
        addItem(item, quantityToAdd);
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
                            <ItemCount init={1} stock={currentStock} onAdd={onAdd}/>
                        :
                            <p>No more stock</p>
                }
            </div>
        </div>
        
    )
}

export default ItemDetail;