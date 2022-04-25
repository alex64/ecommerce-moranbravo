import { useState } from "react";

const ItemCount = ({name, init, stock, onAdd}) => {
    let [count, setCount] = useState(init);

    const increaseItemCount = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decreaseItemCount = () => {
        if(count > init) {
            setCount(count - 1);
        }
    }

    const addItem = () => {
        if(stock > 0) {
            onAdd(count);
        }
    }

    return (
        <div className="item">
            <p className="itemName">{name}</p>
            <div className="itemCountMgr">
                <button className="itemDecrease" onClick={decreaseItemCount}>-</button>
                <p className="itemCount">{count}</p>
                <button className="itemIncremeant" onClick={increaseItemCount}>+</button>
            </div>
            <button className="itemAdd" onClick={addItem}>Add Item</button>
        </div>
    )
}

export default ItemCount;