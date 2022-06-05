import { useNavigate } from "react-router-dom";

const Item = ({product}) => {

    const navigate = useNavigate();

    const handleSeeDetail = () => {
        navigate(`/item/${product.id}`);
    }

    return (
        <div className="item">
            <h3 className="itemTitle">{product.title}</h3>
            <div className="itemDetails">
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <img alt={product.title} className="itemImage" src={product.pictureUrl}/>
                <button onClick={handleSeeDetail}>See Detail</button>
            </div>
            
        </div>
        

    )
}

export default Item;