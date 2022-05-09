import { useState } from "react";

const ItemCount = ({init, stock, onAdd}) => {
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
            <div className="itemCountMgr">
                <button className="itemDecrease" onClick={decreaseItemCount}><span className="material-icons">remove</span></button>
                <p className="itemCount">{count}</p>
                <button className="itemIncremeant" onClick={increaseItemCount}><span className="material-icons">add</span></button>
            </div>
            <button className="itemAdd" onClick={addItem}>Add to Cart</button>
        </div>
    )
}

export default ItemCount;