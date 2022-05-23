import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const navigate = useNavigate();
    const [countItem, setCountItem] = useState(0);
    const { addItem } = useContext(cartContext);

    const onAdd = (quantityToAdd) => {
        setCountItem(quantityToAdd);
        addItem(item, quantityToAdd);
    }

    const goToCart = () => {
        navigate('/cart');
    }

    let itemAction;

    if(countItem > 0) {
        itemAction = <button onClick={goToCart}>Complete Purchase</button>;
    }
    else {
        itemAction = <ItemCount init={1} stock={item.stock} onAdd={onAdd}/>
    }

    return (
        <div className="itemDetailContainer">
            <div className="itemDetailImageDiv">
                <img className="itemDetailImage" src={item.pictureUrl}/>
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
                    <p className="itemDetailPurchaseStock">Stock: {item.stock}</p>
                </div>
                {itemAction}
            </div>
        </div>
        
    )
}

export default ItemDetail;