import { memo } from "react";

const CartDetail = ({cartDetail, deleteElement}) => {
    const handleDeleteClick = () => {
        deleteElement(cartDetail.item.id);
    }

    console.log("test");

    return (
        <div className="cartDetail">
            <div className="cartDetailImage">
                <img alt={cartDetail.item.title} className="cartImage" src={cartDetail.item.pictureUrl}/>
            </div>
            <div className="cartDetailData">
                <div className="cartDetailDataDesc">
                    <p>{cartDetail.item.title}</p>
                    <p>${cartDetail.item.price}</p>
                    <p>{cartDetail.item.description}</p>
                </div>
                <div className="cartDetailDataQuantity">
                    <p>Items: {cartDetail.quantity}</p>
                    <button className="cartDetailDataQuantityDelete" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default memo(CartDetail);