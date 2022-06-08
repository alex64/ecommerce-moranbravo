import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WishListDetail = ({wishDetail, deleteElement, addElement}) => {

    const [ addedToCart, setAddedToCart ] = useState(false);
    const [ stockAvailable, setStockAvailable ] = useState(true);
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        deleteElement(wishDetail.id);
    }

    const handleAddClick = () => {
        const resultAddToCart = addElement(wishDetail);
        if(resultAddToCart) {
            setAddedToCart(true);
        }
        else {
            setStockAvailable(false);
        }
    }

    const handleGoToCart = () => {
        navigate('/cart');
    }

    return (
        <div className="wishDetail">
            <div className="wishDetailImage">
                <img alt={wishDetail.title} className="wishImage" src={wishDetail.pictureUrl}/>
            </div>
            <div className="wishDetailData">
                <div className="wishDetailDataDesc">
                    <p>{wishDetail.title}</p>
                    <p>${wishDetail.price}</p>
                    <p>{wishDetail.description}</p>
                </div>
                <div className="wishDetailDataQuantity">
                    {
                        addedToCart 
                        ?
                            <div>
                                <p>Added to cart</p>
                                <button onClick={handleGoToCart}>Go to cart</button>
                            </div>
                        :
                            <div>
                                {
                                    stockAvailable 
                                    ?
                                        <button className="wishDetailAddToCart" onClick={handleAddClick}>Add to cart</button>
                                    :
                                        <p>Unnable to add. Stock unavailable</p> }
                                    <button className="wishDetailDataQuantityDelete" onClick={handleDeleteClick}>Delete</button>
                            </div>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default WishListDetail;